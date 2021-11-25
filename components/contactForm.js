import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mknywjwg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          className="inputForm"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          className="textareaForm"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" className="cta" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}