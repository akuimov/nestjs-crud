import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    marginTop: '1em',
  },
};

const AddAddressButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/user/create?ruleId=${record.id}`}
    label="Add an user"
    title="Add an user"
  />
);

export default withStyles(styles)(AddAddressButton);
