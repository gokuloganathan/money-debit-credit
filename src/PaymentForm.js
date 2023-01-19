import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function PaymentForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="card-number"
          label="Card Number"
          type="text"
          variant="outlined"
        />
        <TextField
          id="expiration-date"
          label="Expiration Date"
          type="text"
          variant="outlined"
        />
        <TextField id="cvv" label="CVV" type="text" variant="outlined" />
      </div>
      <div>
        <TextField
          id="name-on-card"
          label="Name on Card"
          type="text"
          variant="outlined"
        />
        <TextField
          id="billing-zip"
          label="Billing Zip Code"
          type="text"
          variant="outlined"
        />
      </div>
      <Button variant="contained" color="primary">
        Submit Payment
      </Button>
    </form>
  );
}
