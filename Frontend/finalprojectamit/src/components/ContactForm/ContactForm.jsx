import React, {useState} from 'react';

function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', subject:'', message:''});
  const [sent, setSent] = useState(false);

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    // mock submit — replace with real API call
    console.log('send contact', form);
    setSent(true);
    setTimeout(()=>setSent(false), 2500);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
        <input className="input" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
        <input className="input" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} required />
      </div>
      <input className="input" name="subject" placeholder="Subject" style={{marginTop:12}} value={form.subject} onChange={handleChange} />
      <textarea className="input" name="message" placeholder="Write your message" style={{marginTop:12, minHeight:120}} value={form.message} onChange={handleChange} />
      <div style={{marginTop:12}}>
        <button className="btn btn-primary" type="submit">{sent ? 'Sent!' : 'Send'}</button>
      </div>
    </form>
  );
}
export default ContactForm;
