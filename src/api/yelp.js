import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer s4jM2cSFjPbDWOGRarlghRCYzXLUFdKcer7AD9wQ_1Ejl48Dpy5lEi00dultXZUAf7uWRA2j0jZkVf-6x78h_7vJK3Sgll0M2q_UpWMd6yvRbRBnBLAScfpQBlWqYHYx'
    }
});
