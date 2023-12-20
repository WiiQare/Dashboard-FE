import React, { useState, ChangeEvent, ChangeEventHandler } from 'react';
import { ErrorMessage, Field, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import MuiPhoneNumber from 'material-ui-phone-number';
import { HiArrowSmRight, HiOutlineInformationCircle } from 'react-icons/hi';
import { CiCircleInfo } from 'react-icons/ci';
import { Stack, TextField } from '@mui/material';
import { useSession } from 'next-auth/react';
import { UserType } from '@/Interfaces/interfaces';
import { useMutation } from 'react-query';
import { savePatient } from '@/lib/helper';
import { useStepContext } from '@/context/StepContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootStatePatient } from '@/redux/rootReducerPatient';
import { setPatientDispatch } from '@/redux/reducerPatient';
import LoadingButton from '../../loader/LoadingButton';
import toast from 'react-hot-toast';

export interface StateDataProps {
  type: number;
  message: string;
}

export type valueIdentity = {
  firstName: string;
  lastName: string;
  email?: string;
  homeAddress?: string;
  city?: string;
  phoneNumber: string;
  country?: string;
  accessToken?: string;
};

const Identity = () => {
  const [country, setCountry] = useState('cd');
  const [countryLabel, setCountryLabel] = useState('RD Congo');
  const [dial, setDial] = useState('243');
  const { data: session } = useSession();
  const userState = session?.user as UserType;
  // const [state, setState] = useState<StateDataProps>({ type: 0, message: '' });
  const client = useSelector(
    (state: RootStatePatient) => state?.patient?.client,
  );
  const { activeStepIndex, setActiveStepIndex, formData } = useStepContext();
  const dispatch = useDispatch();

  const ValidationSchema = yup.object().shape({
    firstName: yup.string().required('Le nom est un champ obligatoire'),
    lastName: yup.string().required('Le prénom est un champ obligatoire'),
    email: yup.string().email(),
    homeAddress: yup
      .string()
      .required("L'adresse du domicile est un champ obligatoire"),
    city: yup.string().required('La ville est un champ obligatoire'),
    phoneNumber: yup.string().required('Téléphone est requis'),
    country: yup.string(),
  });

  const savePatientMutation = useMutation(savePatient, {
    onSuccess: (res) => {
      console.log(res);

      if (res.code) {
        // setState({ type: 2, message: res.message ?? res.description });
        toast.error(res.message ?? res.description);
        // setTimeout(() => {
        //   setState({ type: 0, message: '' });
        // }, 3000);
      } else {
        toast.success('Enregistré avec succès');
        // setState({ type: 1, message: 'Enregistré avec succès' });

        localStorage.setItem(
          'dispatchBuyVoucher',
          JSON.stringify({ ...res, countryLabel }),
        );
        dispatch(setPatientDispatch({ ...res, countryLabel }));

        setActiveStepIndex(activeStepIndex + 1);
      }
    },
  });

  const onSubmit = (values: valueIdentity) => {
    if (Object.keys(values).length == 0) return console.log('Pas de données');

    !values.email ? delete values.email : null;

    const data = { ...formData, ...values };

    savePatientMutation.mutate({ ...data, accessToken: userState.id });
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      homeAddress: '',
      city: '',
      phoneNumber: '',
      country: '',
    },
    validationSchema: ValidationSchema,
    onSubmit,
  });

  const renderError = (message: string) => (
    <p className="text-xs text-red-600 font-light flex items-center gap-1">
      <HiOutlineInformationCircle />
      {message}
    </p>
  );
  return (
    <>
      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          autoComplete="false"
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col md:flex-row gap-6 w-full">
              {/* <div className="md:w-1/3 w-full inline-flex">
                    <CountryContext.Provider
                      value={{ country, setCountry, setCountryLabel }}
                    >
                      <CountrySelect />
                    </CountryContext.Provider>
                  </div> */}
              <div className="flex items-center md:gap-1 md:w-full">
                <div className="flex flex-col w-full gap-1">
                  <MuiPhoneNumber
                    fullWidth
                    label="Numéro de Téléphone"
                    variant="outlined"
                    countryCodeEditable={true}
                    select={false}
                    // @ts-ignore
                    onChange={(e: any, country: any) => {
                      formik.setFieldValue('phoneNumber', e);
                      formik.setFieldValue('country', country.countryCode);
                      setDial(country.dialCode);
                      localStorage.setItem('phoneNumber', e);
                      localStorage.setItem('country', country.countryCode);
                    }}
                    defaultCountry={country}
                    name="phoneNumber"
                  />
                  {formik.values.phoneNumber.trim() == '' ||
                  formik.values.phoneNumber.replace('+' + dial, ' ').trim() ==
                    '' ? (
                    renderError('Entrez le numéro de téléphone')
                  ) : (
                    <></>
                  )}
                </div>
                <span className="w-fit h-fit px-1 md:p-2 rounded-lg flex items-center md:gap-2 text-sm text-gray-600">
                  <span
                    className="tooltip tooltip-left md:tooltip-bottom text-xs"
                    data-tip={`${
                      formik.values.phoneNumber.trim() != ''
                        ? formik.values.phoneNumber
                        : 'Ce numéro de téléphone'
                    } devra être le numéro disponible, pour être utilisé à l'hôpital `}
                  >
                    <CiCircleInfo size={23} className="text-red-400" />
                  </span>
                </span>
              </div>
            </div>
          </div>

          <Stack spacing={1.5} className="w-full mt-3">
            <div className="flex gap-2 md:gap-6 w-full">
              <div className="flex flex-col gap-1 w-full">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Nom de famille"
                  variant="outlined"
                  defaultValue={''}
                  onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    localStorage.setItem('firstName', e.currentTarget.value);
                  }}
                  autoComplete="off"
                  {...formik.getFieldProps('firstName')}
                />

                {formik.errors.firstName && formik.touched.firstName ? (
                  renderError(formik.errors.firstName)
                ) : (
                  <></>
                )}
              </div>

              <div className="flex flex-col gap-1 w-full">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Prénom"
                  variant="outlined"
                  // defaultValue={localStorage.getItem('lastName') ?? ''}
                  onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    localStorage.setItem('lastName', e.currentTarget.value);
                  }}
                  {...formik.getFieldProps('lastName')}
                />
                {formik.errors.lastName && formik.touched.lastName ? (
                  renderError(formik.errors.lastName)
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="space-y-1 w-full">
              <TextField
                id="outlined-basic"
                fullWidth
                label="Adresse e-mail (optional)"
                variant="outlined"
                // defaultValue={localStorage.getItem('email') ?? ''}
                onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  localStorage.setItem('email', e.currentTarget.value);
                }}
                {...formik.getFieldProps('email')}
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="flex items-center gap-1 text-rose-500 text-left text-xs px-1">
                  <HiOutlineInformationCircle />
                  <span>{formik.errors.email}</span>
                </span>
              ) : (
                <></>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-6 w-full">
              <div className="flex flex-col gap-1 w-full">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Adresse du domicile"
                  variant="outlined"
                  // defaultValue={localStorage.getItem('homeAddress') ?? ''}
                  onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    localStorage.setItem('homeAddress', e.currentTarget.value);
                  }}
                  {...formik.getFieldProps('homeAddress')}
                />

                {formik.errors.homeAddress && formik.touched.homeAddress ? (
                  renderError(formik.errors.homeAddress)
                ) : (
                  <></>
                )}
              </div>

              <div className="flex flex-col gap-1 w-full">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Ville"
                  variant="outlined"
                  // defaultValue={localStorage.getItem('city') ?? ''}
                  onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    localStorage.setItem('city', e.currentTarget.value);
                  }}
                  {...formik.getFieldProps('city')}
                />
                {formik.errors.city && formik.touched.city ? (
                  renderError(formik.errors.city)
                ) : (
                  <></>
                )}
              </div>
            </div>
          </Stack>

          <div className="flex flex-row-reverse justify-between">
            <button
              className="bg-primary flex gap-3 items-center w-fit font-medium text-white my-2 py-3 px-5 hover:bg-blue-500 duration-200 transition-all hover:shadow rounded-lg"
              type="submit"
            >
              {savePatientMutation.isLoading ? (
                <LoadingButton />
              ) : (
                <>
                  Suivant <HiArrowSmRight />
                </>
              )}
            </button>
          </div>
        </form>
      </FormikProvider>
    </>
  );
};

export default Identity;
