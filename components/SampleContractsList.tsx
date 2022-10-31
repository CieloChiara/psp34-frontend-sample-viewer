const SampleContractsList = (): JSX.Element => {
  
  const navigation = {
    shiden: [
//      { name: 'CieloNFT(u32)', address: 'ZzT8xAQL96avegYRBJSHCoQG8na7YFdtMeWuZRwnWsm27Kv' },
      { name: 'PSP34 sample basic', address: 'none' },
    ],
    shibuya: [
//      { name: 'CieloNFT(u32)', address: 'Wo8i6CdBGLQjMpjXocfNrfgNbfhzu1anzmYJW7dednMCpM4' },
      { name: 'PSP34 sample basic', address: 'none' },
    ],
    local: [
      { name: 'PSP34 sample basic', address: '5FRqw5qG2BXWeccfgojTj6wnGF9d94H1dRehMw7tT5rvXf2Q' },
    ],
    custom: [
      { name: 'PSP34 sample basic', address: 'WzD1PZZS2gz3mVTv36EPgsvzFjb8M2qDTMYhoNPBZMXnf2R' },
    ],
  };

  return (
    <div className="text-left max-w-6xl p-2 m-auto mt-5 w-11/12 border-[#323943] bg-[#121923] border border-1 rounded">
      <h3 className="m-1 text-xl text-center">Sample Contracts</h3>
      <dl role="list" className="m-1 break-all">
        <dt className="m-1 text-xl">Shiden</dt>
        {navigation.shiden.map((item) => (
          <dd className="ml-4" key={item.name}>{item.name}: {item.address}</dd>
        ))}
      </dl>
      <dl role="list" className="mt-3 m-1 break-all">
        <dt className="m-1 text-xl">Shibuya</dt>
        {navigation.shibuya.map((item) => (
          <dd className="ml-4" key={item.name}>{item.name}: {item.address}</dd>
        ))}
      </dl>
      <dl role="list" className="mt-3 m-1 break-all">
        <dt className="m-1 text-xl">Local</dt>
        {navigation.local.map((item) => (
          <dd className="ml-4" key={item.name}>{item.name}: {item.address}</dd>
        ))}
      </dl>
      <dl role="list" className="mt-3 m-1 break-all">
        <dt className="m-1 text-xl">Custom</dt>
        {navigation.custom.map((item) => (
          <dd className="ml-4" key={item.name}>{item.name}: {item.address}</dd>
        ))}
      </dl>
    </div>
  );
};

export default SampleContractsList;