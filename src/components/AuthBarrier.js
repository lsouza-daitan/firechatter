import React from 'react';
import PropTypes from 'prop-types';
import AccountType from '../enums/AccountType';
import AuthRequiredError from '../errors/AuthRequiredError';
import PermissionDeniedError from '../errors/PermissionDeniedError';
import Auth from '../model/auth';

const propTypes = {
    accountType: PropTypes.oneOf(AccountType._keys),
};

class AuthBarrier extends React.Component {
    render() {
        return this.props.children;
    }

    componentDidMount() {
        this.checkAuth();
    }

    checkAuth() {
        const user = Auth.currentUser;
        if (!user) throw new AuthRequiredError();
        if (this.props.accountType) throw new PermissionDeniedError();
        return true;
    }
}

AuthBarrier.propTypes = propTypes;

export default AuthBarrier;
