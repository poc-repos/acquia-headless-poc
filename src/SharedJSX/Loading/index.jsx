import React from 'react';
import PropTypes from 'prop-types';
import Error from '@material-ui/icons/Error';
import BlurOn from '@material-ui/icons/BlurOn';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { PageTitle } from '__SHARED__/Fonts';

const styles = () => ({
    reactLoading: {
        padding: '5px',
        '& span': {
            height: '10px',
            width: '10px',
            marginLeft: '5px',
            borderRadius: '50%',
            background: '#000',
            display: 'inline-block'
        },
        '& span:first-child': {
            animation: 'move 1s ease-in-out infinite alternate',
            background: '#722257'
        },
        '& span:nth-child(2)': {
            animation: 'move 1s ease-in-out -0.25s infinite alternate',
            background: '#00677f'
        },
        '& span:nth-child(3)': {
            animation: 'move 1s ease-in-out -0.5s infinite alternate',
            background: '#ba0c2f'
        },
        '& span:nth-child(4)': {
            animation: 'move 1s ease-in-out -0.75s infinite alternate',
            background: '#4b4f54'
        }
    },
    containeroutsideLoading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    containeroutsideLoadingCenter: {
        overflow: 'hidden',
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    '@keyframes move': {
        '0%': {
            transform: 'translateY(-6px)'
        },
        '100%': {
            transform: 'translateY(6px)'
        }
    }
});

const Loading = ({ errAPI, isIcon, pageTitle, centered, classes }) => {
    if (errAPI) {
        return (
            <React.Fragment>
                <Error />
            </React.Fragment>
        );
    }

    if (isIcon) {
        return <BlurOn />;
    }

    return (
        <React.Fragment>
            {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
            <div
                className={classNames({
                    [classes.containeroutsideLoading]: !centered,
                    [classes.containeroutsideLoadingCenter]: centered
                })}
            >
                <span className={classes.reactLoading}>
                    <span />
                    <span />
                    <span />
                    <span />
                </span>
            </div>
        </React.Fragment>
    );
};
Loading.propTypes = {
    centered: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    errAPI: PropTypes.object,
    isIcon: PropTypes.bool,
    pageTitle: PropTypes.string
};

Loading.defaultProps = {
    centered: false,
    errAPI: null,
    isIcon: false,
    pageTitle: null
};

export default withStyles(styles)(Loading);
