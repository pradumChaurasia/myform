import React from 'react'
import { Formik,Form} from 'formik';

import Chip from '@mui/material/Chip';
import {
    TextField,
    Button,
    MenuItem,
    Select,
    InputLabel,

    Box
    , FormControlLabel,
    Radio,
    RadioGroup,
    FormLabel,
    OutlinedInput,
    TextareaAutosize
} from '@material-ui/core';
import { pink } from '@mui/material/colors';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;


const countries = [
    { value: 'usa', label: 'USA' },
    { value: 'canada', label: 'Canada' },
    { value: 'uk', label: 'UK' },
    { value: 'india', label: 'India' },
    { value: 'russia', label: 'Russia' },
    { value: 'australia', label: 'Australia' },
    { value: 'china', label: 'China' },
    { value: 'srilanka', label: 'Srilanka' },
    { value: 'bangladesh', label: 'Bangladesh' },
    { value: 'nepal', label: 'Nepal' },
    { value: 'hongkong', label: 'Hong-Kong' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'london', label: 'London' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'iraq', label: 'Iraq' },

];

const hobbies = [
    { value: 'reading', label: 'Reading' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'singing', label: 'Singing' },
    { value: 'dancing', label: 'Dancing' },
    { value: 'travelling', label: 'Traveling' },
    { value: 'coding', label: 'Coding' },

];



const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const Registration = () => {
    const [selectedValue, setSelectedValue] = React.useState("female");
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const controlProps = (item) => ({
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: "gender",
      inputProps: { "aria-label": item },
    });
  
    const validate = (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = 'Name is required';
      }
      if (!values.address) {
        errors.address = 'Address is required';
      }
      if (!values.country) {
        errors.country = 'Country is required';
      }
      if (!values.gender) {
        errors.gender = 'Gender is required';
      }
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      return errors;
    };
  
    return (
      <div>
        <Formik
          initialValues={{
            name: '',
            address: '',
            country: '',
            gender: '',
            hobbies: [],
            email: '',
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(JSON.stringify(values, null, 2));
          }}
          validate={validate}
        >
          {(formik) => (
            <Form>
              <div style={{ marginTop: "15px" }}>
                <TextField
                  label="Name"
                  value={formik.values.name}
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
                {formik.touched.name && formik.errors.name && (
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                )}
              </div>
  
              <div style={{ marginTop: "15px" }}>
                <InputLabel htmlFor="address">Address</InputLabel>
                <TextareaAutosize
                  aria-label="Address"
                  value={formik.values.address}
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
                {formik.touched.address && formik.errors.address && (
                  <span style={{ color: "red" }}>{formik.errors.address}</span>
                )}
              </div>
  
              <div style={{ marginTop: "15px" }}>
                <InputLabel htmlFor="country">Country</InputLabel>
                <Select
                  name="country"
                  label="Country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  MenuProps={MenuProps}
                  sx={{ minWidth: 300, backgroundColor: '#202124' }}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.value} value={country.value}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div>
                {formik.touched.country && formik.errors.country && (
                  <span style={{ color: "red" }}>{formik.errors.country}</span>
                )}
              </div>
  
              <div style={{ marginTop: "15px" }}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Choose Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="gender"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                >
                  <FormControlLabel
                    value="female"
                    control={
                      <Radio
                        {...controlProps("female")}
                        size="small"
                      />
                    }
                    label="Female"
                    onBlur={formik.handleBlur}
                  />
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio
                        {...controlProps("male")}
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 28,
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          },
                        }}
                      />
                    }
                    label="Male"
                    onBlur={formik.handleBlur}
                  />
                  <FormControlLabel
                    value="other"
                    control={
                      <Radio
                        {...controlProps("other")}
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 32,
                          },
                        }}
                      />
                    }
                    label="Other"
                    onBlur={formik.handleBlur}
                  />
                </RadioGroup>
              </div>
              <div>
                {formik.touched.gender && formik.errors.gender && (
                  <span style={{ color: "red" }}>{formik.errors.gender}</span>
                )}
              </div>
  
              <div style={{ marginTop: "15px" }}>
                <InputLabel id="demo-multiple-chip-label">Hobbies</InputLabel>
                <Select
                  name="hobbies"
                  multiple
                  value={formik.values.hobbies}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  input={<OutlinedInput id="select-multiple-chip" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {hobbies.map((hobby) => (
                    <MenuItem key={hobby.value} value={hobby.value}>
                      {hobby.label}
                    </MenuItem>
                  ))}
                </Select>
              </div>
  
              <div style={{ marginTop: "15px" }}>
                <TextField
                  label="Email"
                  value={formik.values.email}
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
                {formik.touched.email && formik.errors.email && (
                  <span style={{ color: "red" }}>{formik.errors.email}</span>
                )}
              </div>
  
              <div style={{ marginTop: "15px" }}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  

export default Registration;