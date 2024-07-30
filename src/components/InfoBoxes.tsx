import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            textColor="text-gray-800"
            buttonInfo={{
              text: 'Browse Properties',
              link: '/properties',
              backgroundColor: 'bg-black',
            }}
          >
            Find your next rent here.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-cyan-700"
            textColor="text-gray-100"
            buttonInfo={{
              text: 'Add Property',
              link: '/properties/add',
              backgroundColor: 'bg-cyan-950',
            }}
          >
            Offer you next rent here.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
