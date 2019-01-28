import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
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
              noValidate 
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
                <TextField
                  id="message"
                  label="Requested Topic Summary"
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

export default withStyles(styles)(OutlinedTextFields);

// const Request = props => {
//   const {
//     themeStyle = style,
//     customStyle = '',
//   } = props;

//   return (
//     <nav className={cx(themeStyle, customStyle)}>
//       <section id="request">
//         <div className="inner">
//           <section>
//               <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
//                   <div className="field bot">
//                       <label htmlFor="bot-field"></label>
//                       <input type="hidden" name="bot-field" id="bot-field" />
//                   </div>
//                   <div className="field half first">
//                       <label htmlFor="name">Name</label>
//                       <input type="text" name="name" id="name" />
//                   </div>
//                   <div className="field half">
//                       <label htmlFor="email">Email</label>
//                       <input type="text" name="email" id="email" />
//                   </div>
//                   <div className="field">
//                       <label htmlFor="message">Requested Topic Summary</label>
//                       <textarea name="message" id="message" rows="6"></textarea>
//                   </div>
//                   <ul className="actions">
//                       <li><input type="submit" value="Send Message" className="special" /></li>
//                       <li><input type="reset" value="Clear" /></li>
//                   </ul>
//               </form>
//           </section>
//       </div>
//     </section>
//   </nav>
//   );
// };

// Request.propTypes = {
//   themeStyle: PropTypes.string,
//   customStyle: PropTypes.string,
// };

// export default Request