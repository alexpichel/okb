import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const Submit = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '640px',
        margin: '0 auto',

    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        maxWidth: 475,
    },
    button: {
      margin: theme.spacing.unit,
      minWidth: 150,
    },
    root: {
        display: 'flex',
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
    FormGroup: {
        marginLeft: theme.spacing.unit,
    },
});

class OutlinedTextFields extends React.Component {
    state = {
        name: '',
        age: '',
        multiline: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.checked,
        });
    };

    render () {
        const { classes } = this.props;

        return (
            <form 
              className={classes.container} 
              Validate
              autoComplete="on"
              name="contact" 
              method="post" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field" 
              action="/success">
                <TextField
                  id="outlined-name"
                  label="Name"
                  className={classes.textField}
                  type="name"
                  name="name"
                  autoComplete="name"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="position"
                  label="Position"
                  className={classes.textField}
                  name="position"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="agency"
                  label="Agency"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <FormGroup className={classes.FormGroup} row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.checkedA}
                                onChange={this.handleChange('checkedA')}
                                value="checkedA"
                                color="primary"
                            />
                        }
                        label="Policing"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.checkedB}
                                onChange={this.handleChange('checkedB')}
                                value="checkedB"
                            />
                        }
                        label="Correctional"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.checkedC}
                                onChange={this.handleChange('checkedC')}
                                value="checkedC"
                                classes={{
                                    root: classes.root,
                                    checked: classes.checked,
                                }}
                            />
                        }
                        label="Research"
                    />
                </FormGroup>
                <TextField
                  id="title"
                  label="Program Name"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="problem"
                  label="Problematic Behavior"
                  style={{ margin: 8 }}
                  placeholder=""
                  fullWidth
                  multiline
                  className={classes.textField}
                  rows="6"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="community"
                  label="Community Impact"
                  style={{ margin: 8 }}
                  placeholder=""
                  fullWidth
                  multiline
                  className={classes.textField}
                  rows="6"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="description"
                  label="Program Description"
                  style={{ margin: 8 }}
                  placeholder=""
                  fullWidth
                  multiline
                  className={classes.textField}
                  rows="6"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="research"
                  label="Based on Research?"
                  style={{ margin: 8 }}
                  placeholder=""
                  fullWidth
                  multiline
                  className={classes.textField}
                  rows="6"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="funding"
                  label="Funding"
                  style={{ margin: 8 }}
                  placeholder=""
                  fullWidth
                  multiline
                  className={classes.textField}
                  rows="6"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="impact"
                  label="Impact of Program"
                  style={{ margin: 8 }}
                  placeholder=""
                  fullWidth
                  multiline
                  className={classes.textField}
                  rows="6"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="advice"
                  label="Advice"
                  style={{ margin: 8 }}
                  placeholder=""
                  fullWidth
                  multiline
                  className={classes.textField}
                  rows="6"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="honeypot"
                  label="HoneyPot"
                  style={{ display: 'none' }}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <Button 
                  type="submit" 
                  value="Send Message" 
                  variant="contained" 
                  color='secondary'
                  size='large'
                  className={classes.button}
                >
                  Submit 
                </Button>
            </form>
        );
    }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Submit)(OutlinedTextFields);