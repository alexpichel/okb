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
    },
    formControl: {
        margin: theme.spacing.unit * 3,
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
            [name]: event.target.value,
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
                  value={this.state.name}
                  onChange={this.handleChange('name')}
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
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.checkedA}
                                onChange={this.handleChange('checkedA')}
                                value="checkedA"
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
                            />
                        }
                        label="Research"
                    />
                </FormGroup>
                <TextField
                  id="message"
                  label="Submit Program"
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