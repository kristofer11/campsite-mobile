import RenderCampsite from '../features/campsites/RenderCampsite';

const CampsiteInfo = (props) => {
    return  <RenderCampsite campsite={props.campsite} />
};

export default CampsiteInfo;