import { useEffect, useState } from "react";
import '@polkadot/api-augment'
import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { ContractPromise } from '@polkadot/api-contract';

import abi from '../metadata/metadata_sample.json';
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";
import SampleContractsList from "./SampleContractsList";

const IndexCanvas = () => {
  
  const blockchains = [
    {
      name: 'Shiden', 
      url: 'wss://shiden.api.onfinality.io/public-ws',
      subscan_url: 'https://shiden.subscan.io/account/',
    },
    {
      name: 'Shibuya',
      url: 'wss://rpc.shibuya.astar.network',
      subscan_url: 'https://shibuya.subscan.io/account/',
    },
    {
      name: 'Local',
      url: 'ws://127.0.0.1:9944',
    },
    {
      name: 'Custom',
      url: 'wss://astar-collator.cielo.works:11443'
    },
  ];

  const [block, setBlock] = useState(0);
  const [lastBlockHash, setLastBlockHash] = useState("");
  const [blockchainUrl, setBlockchainUrl] = useState("");
  const [blockchainName, setBlockchainName] = useState("");
  const [actingChainName, setActingChainName] = useState("");
  const [actingChainUrl, setActingChainUrl] = useState("");

  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [actingAddress, setActingAddress] = useState("");
  const [api, setApi] = useState<any>();

  const [contractAddress, setContractAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [tokenURI, setTokenURI] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");
  
  const [result, setResult] = useState("");
  const [gasConsumed, setGasConsumed] = useState("");
  const [outcome, setOutcome] = useState("");
  
  const [tokenJson, setTokenJson] = useState("");
  const [tokenImageUri, setTokenImageUri] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenDescription, setTokenDescription] = useState("");
  const [subScanUri, setSubScanUri] = useState("");
  const [subScanTitle, setSubScanTitle] = useState("");

/*
  const extensionSetup = async () => {
    const { web3Accounts, web3Enable } = await import(
      "@polkadot/extension-dapp"
    );
    const extensions = await web3Enable("Showcase PSP34 Mint Sample");
    if (extensions.length === 0) {
      return;
    }
    const account = await web3Accounts();
    setAccounts(account);
  };
*/

useEffect(() => {
//    setup();
  });
  
  async function getTokenURI() {
    if (!blockchainUrl || !block) {
      alert("Please select Blockchain and click 'Set Blockchain' button.");
      return;
    }
    const contract = new ContractPromise(api, abi, contractAddress);
    const {result, output} = 
      await contract.query['shiden34Trait::tokenUri'](
        contractAddress,
        {value: 0, gasLimit: -1},
        {u64: tokenId});
    
    setResult(JSON.stringify(result.toHuman()));

    if (result.type === 'Ok') {

      const outcome: any = output;

      if (outcome.type === 'Ok') {
        const url = outcome.inner.toString();
        if (url !== undefined) {
          setOutcome(url);
          axios.get(url).then(res => {
            setTokenJson(res.data.image.toString());
            setTokenImageUri(res.data.image.toString());
            setTokenName(res.data.name.toString());
            setTokenDescription(res.data.description.toString());
          });
        }
        
        if (actingChainName === "Shiden" || actingChainName === "Shibuya") {
          const newDataset = blockchains.filter(data => data.name === actingChainName);
          const subScanBaseUri = newDataset[0]?.subscan_url;
          setSubScanUri(subScanBaseUri + contractAddress);
          setSubScanTitle('Show on Subscan (' + actingChainName + ')');
        } else {
          setSubScanTitle("");
        }
    
        getOwnerOf();

      } else if (outcome.type === 'Err') {
        setOutcome(outcome.inner.toString());
        setTokenJson('');
        setTokenImageUri('');
        setTokenName(outcome.inner.toString());
        setTokenDescription('');
        setOwnerAddress('none (TokenNotExists)');
      }

    } else if (result.type === 'Err') {
      setOutcome('');
      setTokenJson('');
      setTokenImageUri('');
      setTokenName(result.toString());
      setTokenDescription('');
      setOwnerAddress('');
    }

  };

  async function getOwnerOf() {
    const gasLimit = 3000 * 1000000;

    const contract = new ContractPromise(api, abi, contractAddress);
    const {gasConsumed, result, output} = 
      await contract.query['psp34::ownerOf'](
        contractAddress,
        {value: 0, gasLimit: -1},
        {u64: tokenId});
    
    const resultStr: string = output?.toHuman()?.toString()!; 
    if (resultStr) {
      setOwnerAddress(resultStr);
    } else {
      setOwnerAddress('none');
    }

  };

  const setup = async () => {

    const newDataset = blockchains
      .filter(data => data.name === blockchainName);
    const chainUrl = newDataset[0]?.url;
    //blockchainUrl = newDataset[0]?.url;
    setBlockchainUrl(newDataset[0]?.url);
    //alert(blockchainUrl);
    //console.log(newDataset);
    //alert(newDataset[0]?.url);

    if (!chainUrl) {
      return;
    }
    const wsProvider = new WsProvider(chainUrl);
    const api2 = await ApiPromise.create({provider: wsProvider});

    const unsub = await api2.rpc.chain.subscribeNewHeads((lastHeader) => {
      setApi(api2);
      setActingChainName(blockchainName);
      setBlock(lastHeader.number.toNumber());
      setLastBlockHash(lastHeader.hash.toString());
      setActingChainUrl(chainUrl);
      console.log(api2.hasSubscriptions);
    });
/*
    setTimeout(() => {
      console.log(api2.type); //.options.provider);
            if (api !== api2) {

        //unsub();
        alert('Unsubscribed');
      }
      }, 3000);
*/
  };

  return (
    <div className="text-center">
      <Header />
      <div className="p-3 mt-2 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded">
        <div className="mb-5 text-xl">Select blockchain</div>
        <button
          className="bg-[#184e9b] hover:bg-[#1964cf] hover:duration-500 text-white rounded px-4 py-2"
          onClick={setup}
        >
          Set Blockchain
        </button>
        <select
          className="p-3 m-3 mt-0 bg-[#020913] border-2 border-gray-300 rounded"
          onChange={(event) => {
            console.log(event.target.value);
            setBlockchainName((event.target.value));
          }}
        >
            <option value="None">-- select --</option>
            <option value="Shiden">Shiden</option>
            <option value="Shibuya">Shibuya</option>
            <option value="Local">Local</option>
            <option value="Custom">Custom</option>
        </select>

        <div className="p-2 m-2 mt-0">Current Blockchain Name: {actingChainName? actingChainName : "---"}</div>
        <div className="p-2 m-2 mt-0">Current Blockchain URL: {actingChainUrl? actingChainUrl : "---"}</div>
        <div className="p-1 m-1">Block: {block? block : "---"}</div>
        <div className="p-1 m-auto w-11/12 break-all">Last block hash: {lastBlockHash? lastBlockHash : "---"}</div>
      </div>

      <div className="text-center mt-5">
        <select
          className="p-3 m-3 bg-[#020913] border-2 border-gray-300 rounded hidden"
          onChange={(event) => {
            console.log(event);
            setActingAddress(event.target.value);
          }}
        >
          {accounts.map((a) => (
            <option key={a.address} value={a.address}>
              [{a.meta.name}]
            </option>
          ))}
        </select>
      </div>

      <div className="text-left p-2 pt-0 mt-5 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded">

        <div className="text-center mt-4">
          <div className="mb-3 text-xl">NFT View</div>
          <button disabled={!contractAddress || !tokenId}
            className="bg-[#184e9b] hover:bg-[#1964cf] hover:duration-500 disabled:bg-stone-700 text-white rounded px-4 py-2"
            onClick={getTokenURI}
          >{contractAddress || tokenId ? 'View NFT' : 'Enter Blank Form'}</button>
          <input
            className="p-2 m-2 bg-[#020913] border-2 border-gray-300 rounded"
            onChange={(event) => setContractAddress(event.target.value)}
            placeholder="ContractAddress"
          />
          <input
            className="p-2 m-2 w-20 bg-[#020913] border-2 border-gray-300 rounded"
            onChange={(event) => setTokenId(event.target.value)}
            placeholder="TokenID"
          />
        </div>

        <div className="text-center">
          <div>
            <img className="p-2 m-auto w-64" src={tokenImageUri} />
            <p className="p-1 m-1 text-xl break-words">{tokenName}</p>
            <p className="p-1 m-1 break-words">{tokenDescription}</p>
            <p className={contractAddress ? "m-1 break-all" : "hidden"}><a target="_blank" rel="noreferrer" href={subScanUri}>{subScanTitle}</a></p>
          </div>
        </div>

        <div>
          <p className="p-1 m-1 break-all">MetadataUri: {outcome}</p>
          <p className="p-1 m-1 break-all" >ImageUri: {tokenJson}</p>
          <p className="p-1 m-1">TokenId: {tokenId}</p>
          <p className="p-1 m-1 break-all">OwnerAddress: {ownerAddress}</p>
        </div>
      </div>
      <SampleContractsList />
      <Footer />
    </div>
  );
};

export default IndexCanvas;