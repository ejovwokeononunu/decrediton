import { FormattedMessage as T, defineMessages } from "react-intl";
import { InfoDocModalButton, SignMessageButton } from "buttons";
import { TextInput } from "inputs";

const messages = defineMessages({
  addressFieldPlaceholder: {
    id: "securitycenter.form.field.address.placeholder",
    defaultMessage: "Enter an address",
  },
  messageFieldPlaceholder: {
    id: "securitycenter.form.field.message.placeholder",
    defaultMessage: "Enter your message",
  }
});

const SignMessageForm = ({
  onChangeAddress,
  onChangeMessage,
  address,
  message,
  addressError,
  messageError,
  isSigningMessage,
  formatMessage
}) => {
  return (
    <Aux>
      <div className="security-center-form">
        <div className="button-right">
          <InfoDocModalButton document="SignMessageInfo" />
        </div>
        <div className="security-center-form-row">
          <div className="security-center-form-row-label">
            <T id="securitycenter.form.field.address.label" m="Address"/>
          </div>
          <div className="security-center-form-row-field">
            <TextInput
              required
              value={address}
              invalid={addressError}
              invalidMessage={addressError}
              onChange={(e) => onChangeAddress(e.target.value)}
              placeholder={formatMessage(messages.addressFieldPlaceholder)}
              showErrors={addressError}
            />
          </div>
        </div>
        <div className="security-center-form-row">
          <div className="security-center-form-row-label">
            <T id="securitycenter.form.field.message.label" m="Message"/>
          </div>
          <div className="security-center-form-row-field-message">
            <TextInput
              required
              value={message}
              invalid={messageError}
              invalidMessage={messageError}
              onChange={(e) => onChangeMessage(e.target.value)}
              placeholder={formatMessage(messages.messageFieldPlaceholder)}
              showErrors={messageError}
            />
          </div>
        </div>
      </div>
      <SignMessageButton
        className="stakepool-content-purchase-button"
        address={address}
        message={message}
        disabled={isSigningMessage || address == "" || message == "" || addressError || messageError}
      />
    </Aux>
  );
};

SignMessageForm.propTypes = {
  formatMessage: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default SignMessageForm;
