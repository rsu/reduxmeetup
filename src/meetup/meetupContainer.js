import { connect } from 'react-redux';

import * as actionTypes from '../types';
import MeetupPage from './meetupPage';

const mapStateToProps = ({ memberReducer }) => ({ memberReducer });

const mapDispatchToProps = dispatch => ({
  onFetchMembers: () => {
    dispatch({
      type: actionTypes.MEMBER_FETCH_REQUESTED,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MeetupPage);
