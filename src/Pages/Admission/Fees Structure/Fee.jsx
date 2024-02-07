import React from "react";
import "../Admission.css";
import feeImg from "../../../Assets/Fees Page/Fee.jpg";
import feethumb from "../../../Assets/Fees Page/fee-thumb.jpg";

// Downloadable Content

import FeePdf from "../../../Downloads/CollegeFee.pdf";
import FeePdf1 from '../../../Downloads/Fee.pdf'
import { Link } from "react-router-dom";

const Fee = () => {
  return (
    <>
      <div className="box-heading">
        <img src={feethumb} alt="fee" />
        <div>
          <h1 className="main-heading">Fee Structure</h1>
          <p>
            Welcome to our Fee structure page of Government Institution,
            RajanuKunte.This guide provides valuable insights into the financial
            aspects, ensuring clarity and accessibility for prospective
            students. Here is a comprehensive overview to empower your journey
            towards academic excellence within the institution's affordable and
            student-friendly framework
          </p>
        </div>
      </div>
      <div className="wrap-container">
        <h1 className="main-heading">The Government PU college, Rajanukunte</h1>
        <Link
          to={FeePdf}
          download="CollegeFee"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">Download Pdf</button>
        </Link>
      </div>

      <div className="fee-section">
        {/* 1st PUC FEE STRUCTURE 2023-24	*/}

        <table class="tg">
          <thead>
            <tr>
              <th class="tg-8d8j" colspan="10">
                1st PUC FEE STRUCTURE 2023-24
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-7zrl"></td>
              <td class="tg-8d8j" colspan="3">
                PCMB/PCMC
              </td>
              <td class="tg-8d8j" colspan="3">
                CEBA
              </td>
              <td class="tg-8d8j" colspan="3">
                HEBA/HEPS
              </td>
            </tr>
            <tr>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl">GM</td>
              <td class="tg-7zrl">SC/ST/G-1</td>
              <td class="tg-7zrl">OBC</td>
              <td class="tg-7zrl">GM</td>
              <td class="tg-7zrl">SC/ST/G-1</td>
              <td class="tg-7zrl">OBC</td>
              <td class="tg-7zrl">GM</td>
              <td class="tg-7zrl">SC/ST/G-1</td>
              <td class="tg-7zrl">OBC</td>
            </tr>
            <tr>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl">GIRLS</td>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl">GIRLS</td>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl">GIRLS</td>
              <td class="tg-7zrl"></td>
            </tr>
            <tr>
              <td class="tg-7zrl">FEE</td>
              <td class="tg-7zrl">1466</td>
              <td class="tg-7zrl">255</td>
              <td class="tg-7zrl">796</td>
              <td class="tg-7zrl">1466</td>
              <td class="tg-7zrl">255</td>
              <td class="tg-7zrl">796</td>
              <td class="tg-7zrl">1466</td>
              <td class="tg-7zrl">255</td>
              <td class="tg-7zrl">796</td>
            </tr>
            <tr>
              <td class="tg-7zrl">P-EXAM</td>
              <td class="tg-7zrl">336</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">112</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
            </tr>
            <tr>
              <td class="tg-7zrl">LAB</td>
              <td class="tg-7zrl">150</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">150</td>
              <td class="tg-7zrl">50</td>
              <td class="tg-7zrl">50</td>
              <td class="tg-7zrl">50</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
            </tr>
            <tr>
              <td class="tg-7zrl">Govt Total Fee</td>
              <td class="tg-7zrl">1952</td>
              <td class="tg-7zrl">255</td>
              <td class="tg-7zrl">946</td>
              <td class="tg-7zrl">1628</td>
              <td class="tg-7zrl">305</td>
              <td class="tg-7zrl">846</td>
              <td class="tg-7zrl">1466</td>
              <td class="tg-7zrl">255</td>
              <td class="tg-7zrl">769</td>
            </tr>
            <tr>
              <td class="tg-7zrl">CDC</td>
              <td class="tg-7zrl">548</td>
              <td class="tg-7zrl">745</td>
              <td class="tg-7zrl">554</td>
              <td class="tg-7zrl">672</td>
              <td class="tg-7zrl">695</td>
              <td class="tg-7zrl">745</td>
              <td class="tg-7zrl">534</td>
              <td class="tg-7zrl">745</td>
              <td class="tg-7zrl">704</td>
            </tr>
            <tr>
              <td class="tg-7zrl">TOTAL</td>
              <td class="tg-7zrl">2500</td>
              <td class="tg-7zrl">1000</td>
              <td class="tg-7zrl">1500</td>
              <td class="tg-7zrl">2300</td>
              <td class="tg-7zrl">1000</td>
              <td class="tg-7zrl">1500</td>
              <td class="tg-7zrl">2000</td>
              <td class="tg-7zrl">1000</td>
              <td class="tg-7zrl">1500</td>
            </tr>
          </tbody>
        </table>

        {/* 2nd PUC FEE STRUCTURE 2023-24		*/}
        <table class="tg">
          <thead>
            <tr>
              <th class="tg-8d8j" colspan="10">
                2nd PUC FEE STRUCTURE 2023-24
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-7zrl"></td>
              <td class="tg-8d8j" colspan="3">
                PCMB/PCMC
              </td>
              <td class="tg-8d8j" colspan="3">
                CEBA
              </td>
              <td class="tg-8d8j" colspan="3">
                HEBA/HEPS
              </td>
            </tr>
            <tr>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl">GM</td>
              <td class="tg-7zrl">SC/ST/G-1</td>
              <td class="tg-7zrl">OBC</td>
              <td class="tg-7zrl">GM</td>
              <td class="tg-7zrl">SC/ST/G-1</td>
              <td class="tg-7zrl">OBC</td>
              <td class="tg-7zrl">GM</td>
              <td class="tg-7zrl">SC/ST/G-1</td>
              <td class="tg-7zrl">OBC</td>
            </tr>
            <tr>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl">GIRLS</td>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl">GIRLS</td>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl"></td>
              <td class="tg-7zrl">GIRLS</td>
              <td class="tg-7zrl"></td>
            </tr>
            <tr>
              <td class="tg-7zrl">FEE</td>
              <td class="tg-7zrl">1466</td>
              <td class="tg-7zrl">230</td>
              <td class="tg-7zrl">686</td>
              <td class="tg-7zrl">686</td>
              <td class="tg-7zrl">255</td>
              <td class="tg-7zrl">686</td>
              <td class="tg-7zrl">686</td>
              <td class="tg-7zrl">230</td>
              <td class="tg-7zrl">686</td>
            </tr>
            <tr>
              <td class="tg-7zrl">P-EXAM</td>
              <td class="tg-7zrl">336</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">110</td>
              <td class="tg-7zrl">110</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
            </tr>
            <tr>
              <td class="tg-7zrl">LAB</td>
              <td class="tg-7zrl">330</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">112</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
            </tr>
            <tr>
              <td class="tg-7zrl">EXAM</td>
              <td class="tg-7zrl">400</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">400</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
              <td class="tg-7zrl">0</td>
            </tr>
            <tr>
              <td class="tg-7zrl">M-FE</td>
              <td class="tg-7zrl">50</td>
              <td class="tg-7zrl">50</td>
              <td class="tg-7zrl">50</td>
              <td class="tg-7zrl">50</td>
              <td class="tg-7zrl">50</td>
              <td class="tg-7zrl">50</td>
              <td class="tg-7zrl">50</td>
              <td class="tg-7zrl">50</td>
              <td class="tg-7zrl">50</td>
            </tr>
            <tr>
              <td class="tg-7zrl">Govt Total Fee</td>
              <td class="tg-7zrl">2132</td>
              <td class="tg-7zrl">230</td>
              <td class="tg-7zrl">736</td>
              <td class="tg-7zrl">1358</td>
              <td class="tg-7zrl">415</td>
              <td class="tg-7zrl">736</td>
              <td class="tg-7zrl">736</td>
              <td class="tg-7zrl">280</td>
              <td class="tg-7zrl">736</td>
            </tr>
            <tr>
              <td class="tg-7zrl">CDC</td>
              <td class="tg-7zrl">868</td>
              <td class="tg-7zrl">720</td>
              <td class="tg-7zrl">764</td>
              <td class="tg-7zrl">642</td>
              <td class="tg-7zrl">585</td>
              <td class="tg-7zrl">764</td>
              <td class="tg-7zrl">764</td>
              <td class="tg-7zrl">720</td>
              <td class="tg-7zrl">764</td>
            </tr>
            <tr>
              <td class="tg-7zrl">TOTAL</td>
              <td class="tg-7zrl">3000</td>
              <td class="tg-7zrl">1000</td>
              <td class="tg-7zrl">1500</td>
              <td class="tg-7zrl">2000</td>
              <td class="tg-7zrl">1000</td>
              <td class="tg-7zrl">1500</td>
              <td class="tg-7zrl">1500</td>
              <td class="tg-7zrl">1000</td>
              <td class="tg-7zrl">1500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="wrap-container">
        <h1 className="main-heading">
          The Government Primary And HighSchool, Rajanukunte
        </h1>
        <Link
          to={FeePdf1}
          download="Fee"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">Download Pdf</button>
        </Link>
      </div>

      <div className="fee-section">
        <img src={feeImg} alt="fee" />
      </div>
    </>
  );
};

export default Fee;
