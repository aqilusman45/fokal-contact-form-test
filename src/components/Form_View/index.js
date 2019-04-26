import React from "react";

export const FormView = props => {
  const {
    email,
    name,
    phName,
    onFocus,
    onBlur,
    onChange,
    onSubmit,
    phEmail,
    userMessage,
    hrBlur,
    message,
    services,
    budget,
    phMessage,
    hrFocus
  } = props;
  return (
    <div className="mx-auto form">
      <div className="form-heading">
        <h1>Say Hello!</h1>
      </div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div>
            <label onFocus={hrFocus} onBlur={hrBlur}>
              <div>Your Name</div>
              <div className="input-container">
                <input
                  required
                  name="name"
                  type="name"
                  value={name}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  placeholder={phName}
                  onChange={onChange}
                />
                <span className="span-animate" />
              </div>
            </label>
          </div>
          <div>
            <label>
              <div>Email</div>
              <div className="input-container">
                <input
                  required
                  name="email"
                  type="email"
                  value={email}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  placeholder={phEmail}
                  onChange={onChange}
                />
                <span className="span-animate" />
              </div>
            </label>
          </div>
          <div>
            <label>
              <div>Needed Services</div>
              <div className="input-container">
                <select
                  type="services"
                  name="services"
                  value={services}
                  onChange={onChange}
                >
                  <option defaultChecked value="Choose Services">
                    Choose Services
                  </option>
                  <option value="Online Store">Online Store</option>
                  <option value="eCommerce Bussiness">
                    eCommerce Bussiness
                  </option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Online Services">Online Services</option>
                </select>
              </div>
              <span className="span-animate" />
            </label>
          </div>
          <div>
            <label>
              <div>Budget</div>
              <div className="input-container">
                <select
                  type="budget"
                  name="budget"
                  value={budget}
                  onChange={onChange}
                >
                  <option defaultChecked value="Select Budget">
                    Select Budget
                  </option>
                  <option value="1500">$1500</option>
                  <option value="2000">$2000</option>
                  <option value="2500">2500</option>
                </select>
              </div>
              <span className="span-animate" />
            </label>
          </div>
          <div>
            <label>
              <div>Message</div>
              <div className="input-container">
                <textarea
                  required
                  type="message"
                  name="message"
                  value={message}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onChange={onChange}
                  placeholder={phMessage}
                />
                <span className="span-animate span-normal" />
              </div>
            </label>
          </div>
          <div className="form-button">
            <div className="button-wrapper">
              <div className="container-contact100-form-btn">
                <button className="contact100-form-btn">
                  <span>
                    {"Submit"}
                    <i
                      aria-hidden="true"
                      className="fas fa-long-arrow-alt-right"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
        {userMessage && <p>{userMessage}</p>}
      </div>
    </div>
  );
};
