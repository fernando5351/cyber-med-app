import {
  CardField,
  StripeProvider,
  useStripe,
} from '@stripe/stripe-react-native';
import React, {useEffect, useState, useContext} from 'react';
import {Alert, Button, View} from 'react-native';
import {AuthUser} from "../../context/AuthUser"

const StripeTest = ({total}) => {
  const {userToken} = useContext(AuthUser)
  const email = userToken.email
    const {confirmPayment} = useStripe();
  
    const [key, setKey] = useState('');
  
    useEffect(() => {
      fetch('https://lovely-lace-production.up.railway.app/payment', {
        method: 'POST',
        body: {
          email 
        }
      })
        .then(res => res.json())
        .then(res => {
          Alert.alert()
          console.log('intent', res);
          setKey(pi_3LxsJ0L1ZhEreWQq0LfdKP3B_secret_fwQAM12mfN5Fzoj2mQaPKZbwB);
        })
        .catch(e => Alert.alert(e.message));
    }, []);
  
    const handleConfirmation = async () => {
      if (key) {
        // To create a PaymentIntent for confirmation, see our guide at: https://stripe.com/docs/payments/payment-intents/creating-payment-intents#creating-for-automatic
        const {paymentIntent, error} = await stripe.paymentIntents.confirm(
          {
            type: 'card',
            payment_method: 'pm_card_visa',
            billingDetails: {
              email: email,
              total: total
            },
          }
        )
  
        if (!error) {
          Alert.alert('Received payment', `Billed for ${paymentIntent?.amount}`);
        } else {
          Alert.alert('Error', error.message);
        }
      }
    };
  
    return (
      <View>
        <CardField
          postalCodeEnabled={false}
          placeholder={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={cardDetails => {
            console.log('cardDetails', cardDetails);
          }}
          onFocus={focusedField => {
            console.log('focusField', focusedField);
          }}
        />
        <Button title="Confirm payment" onPress={handleConfirmation} />
      </View>
    );
  };

export default StripeTest;