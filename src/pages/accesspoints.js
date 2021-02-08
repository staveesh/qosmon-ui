import { Container } from "react-bootstrap";
import { fetchAllAccessPoints } from "../redux/actions/apActionCreator";
import { connect } from "react-redux";
import { useEffect } from "react";
import APstats from "../components/accesspoints/APstats";

const AccessPoints = ({
  accessPointState,
  dispatchFetchAPAction,
  location,
}) => {
  const dId = location.pathname.split("/")[2];
  useEffect(() => {
    if (dId) dispatchFetchAPAction({ id: dId });
  }, [dispatchFetchAPAction, dId]);
  console.log(accessPointState);
  return (
    <Container
      style={{
        marginTop: "70px",
      }}
    >
      {accessPointState.bssids.map((bssid) => (
        <APstats
          key={bssid}
          data={accessPointState.accessPoints.filter(
            (node) => node.bssid === bssid
          )}
        />
      ))}
    </Container>
  );
};
const mapStateToProps = (state) => ({
  accessPointState: state.accessPointState,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchFetchAPAction: (params) => dispatch(fetchAllAccessPoints(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AccessPoints);
