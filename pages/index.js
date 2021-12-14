import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Mrs.Kilpatricks Rockstar Website
        </title>
      </Head>
      <div class="section">
        <div class="title center">
          <h1>
            Welcome to Mrs. Kilpatrick's Science Website
          </h1>
        </div>
        <br />
        <div class="float body">

          <div class="index-side">
            <div>
              <h3><strong>Select your class to obtain Notes, Handouts, and Videos</strong></h3>
            </div>
            <div>
              <ul>
                <li><a>Physics Honors/Pre-IB</a></li>
                <li><a>Pre-IB Chemistry/Chemistry Honors</a></li>
                <li><a>AP/IB Chemistry</a></li>
              </ul>
            </div>
            <div>
              <strong>
                <h3>
                  Please email if you have forgotten the password.
                </h3>
              </strong>
            </div>
          </div>
          <div class="index-body">
            <h3 class="center">
              Dear Parents and Students
            </h3>
            <p>
              This will be an exciting and challenging time as we work together to investigate science and the world around us.

              Attached to this website is my syllabus, notes, video lectures, calendar, and assignments. I will try to keep it updated as often as possible. If you have any questions or concerns feel free to contact me at brandy.kilpatrick@stjohns.k12.fl.us . On the right hand side you will find a link to help with troubleshooting for with playposit and also a link to make appts with me to ask questions or get guidance if needed.
              Sincerely,

              Mrs. Kilpatrick

              P.S. Please be aware that this site is constantly under construction.
            </p>

            <div class="tweets center">
              <a href="https://twitter.com/Chemteach84">Tweets by @Chemteach84</a>
            </div>

          </div>
          <div class="index-side">
            <ul>
              <li><a href="mailto:brandy.kilpatrick@stjohns.k12.fl.us">Contact Me</a></li>
              <li><a href="https://calendar.google.com/calendar/embed?src=bthomas21%40gmail.com&ctz=America/New_York">Calendar</a></li>
              <li><a href="https://docs.google.com/forms/d/1vay-sSNX5LMVeOE3tqvJnOqO27OGskYQy2eOjlkKhCI/viewform?usp=send_form">Website Assignment</a></li>
              <li><a href="http://kilpatrickscience.com/Chemitsry/Tips%20For%20Using%20Playposit.docx">Tips for Using playposit</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
