import {
  CardField,
  StripeProvider,
  useStripe,
} from '@stripe/stripe-react-native';
import React, {useEffect, useState} from 'react';
import {Alert, Button, SafeAreaView, View} from 'react-native';

const StripeTest = () => {
    const {confirmPayment} = useStripe();
  
    const [key, setKey] = useState('');
  
    useEffect(() => {
      fetch('http://localhost:4000/payment', {
        method: 'POST',
      })
        .then(res => res.json())
        .then(res => {
          console.log('intent', res);
          setKey();
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