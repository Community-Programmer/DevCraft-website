import React from 'react'
import '../Academics.css'
import timetable from "../../../Assets/Timetable/timetable.jpg";
import primary from '../../../Assets/Timetable/primary.png'

import CollegeTimetable from '../../../Downloads/CollegeTimetable.pdf'
import PrimaryTimetable from '../../../Downloads/PrimaryTimetable.pdf'
import HighSchoolTimetable from '../../../Downloads/HighSchoolTimetable.pdf'
import { Link } from 'react-router-dom';

const Timetable = () => {
  return (
    <>
      <div className="box-heading">
        <img src={timetable} alt="timetable" />
        <div>
          <h1 className="main-heading">Timetable</h1>
          <p>
            Welcome to our Time table page of Government Institution, RajanuKunte. Here, we invite you to
            explore meticulously crafted to harmonize learning and work activities, it stands as a guide for
            individuals seeking balance, productivity, and success in their daily endeavors within the institution's
            vibrant academic and professional landscape
          </p>
        </div>
      </div>


   
    <div className="wrap-container">
    <h1 className="main-heading">The Government PU College, Rajanukunte</h1>
        <Link
          to={CollegeTimetable}
          download="CollegeTimetable"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">Download Pdf</button>
        </Link>
      </div>

    <div className="timetable-section">
    <table class="tg">
<thead>
  <tr>
    <th class="tg-8d8j" colspan="7">MONDAY</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-nrix">CLASS</td>
    <td class="tg-7zrl">9:30 - 10:30</td>
    <td class="tg-7zrl">10:30 - 11:30</td>
    <td class="tg-7zrl">11:30 - 12:30</td>
    <td class="tg-7zrl">12:30 - 1:00</td>
    <td class="tg-7zrl">1:00 - 2:00</td>
    <td class="tg-7zrl">2:00 - 4:00</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IPCMB</td>
    <td class="tg-7zrl">BIO/CS</td>
    <td class="tg-7zrl">PHY</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-nrix" rowspan="8">LUNCH<br/>TIME</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">P/C</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIPCMB</td>
    <td class="tg-7zrl">MATHS</td>
    <td class="tg-7zrl">CHE</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">BIO/CS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IHEBA</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">ACC</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIHEBA</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">ECO</td>
  </tr>
  <tr>
    <td class="tg-7zrl">ICEBA</td>
    <td class="tg-7zrl">CS</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">BS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IICEBA</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">CS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IHEPS</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">SOC</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">HIS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIHEPS</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">PS</td>
    <td class="tg-7zrl">SOC</td>
    <td class="tg-7zrl">ECO</td>
  </tr>
</tbody>
</table>


<table class="tg">
<thead>
  <tr>
    <th class="tg-8d8j" colspan="7">TUESDAY</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-nrix">CLASS</td>
    <td class="tg-7zrl">9:30 - 10:30</td>
    <td class="tg-7zrl">10:30 - 11:30</td>
    <td class="tg-7zrl">11:30 - 12:30</td>
    <td class="tg-7zrl">12:30 - 1:00</td>
    <td class="tg-7zrl">1:00 - 2:00</td>
    <td class="tg-7zrl">2:00 - 3:00</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IPCMB</td>
    <td class="tg-7zrl">PHY</td>
    <td class="tg-7zrl">CHE</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-nrix" rowspan="8">LUNCH<br/>TIME</td>
    <td class="tg-7zrl">BIO/CS</td>
    <td class="tg-7zrl">MATHS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIPCMB</td>
    <td class="tg-7zrl">CHE</td>
    <td class="tg-7zrl">MATHS</td>
    <td class="tg-7zrl">BIO/CS</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">PHY</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IHEBA</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">HIS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIHEBA</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">KAN</td>
  </tr>
  <tr>
    <td class="tg-7zrl">ICEBA</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">SC</td>
    <td class="tg-7zrl">KAN</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IICEBA</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">CS</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">ECO</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IHEPS</td>
    <td class="tg-7zrl">PS</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">ECO</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIHEPS</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">SOC</td>
    <td class="tg-7zrl">PS</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">KAN</td>
  </tr>
</tbody>
</table>


<table class="tg">
<thead>
  <tr>
    <th class="tg-8d8j" colspan="7">WEDNESDAY</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-nrix">CLASS</td>
    <td class="tg-7zrl">9:30 - 10:30</td>
    <td class="tg-7zrl">10:30 - 11:30</td>
    <td class="tg-7zrl">11:30 - 12:30</td>
    <td class="tg-7zrl">12:30 - 1:00</td>
    <td class="tg-7zrl">1:00 - 2:00</td>
    <td class="tg-7zrl">2:00 - 4:00</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IPCMB</td>
    <td class="tg-7zrl">MATHS</td>
    <td class="tg-7zrl">CHE</td>
    <td class="tg-7zrl">PHY</td>
    <td class="tg-nrix" rowspan="8">LUNCH<br/>TIME</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">MATHS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIPCMB</td>
    <td class="tg-7zrl">CHE</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">MATHS</td>
    <td class="tg-7zrl">PHY</td>
    <td class="tg-7zrl">P/C</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IHEBA</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">KAN</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIHEBA</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">HIS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">ICEBA</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">ENG</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IICEBA</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">ACC</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IHEPS</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">PS</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">SOC</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIHEPS</td>
    <td class="tg-7zrl">SOC</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">HIS</td>
  </tr>
</tbody>
</table>



<table class="tg">
<thead>
  <tr>
    <th class="tg-8d8j" colspan="7">THURSDAY</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-nrix">CLASS</td>
    <td class="tg-7zrl">9:30 - 10:30</td>
    <td class="tg-7zrl">10:30 - 11:30</td>
    <td class="tg-7zrl">11:30 - 12:30</td>
    <td class="tg-7zrl">12:30 - 1:00</td>
    <td class="tg-7zrl">1:00 - 2:00</td>
    <td class="tg-7zrl">2:00 - 4:00</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IPCMB</td>
    <td class="tg-7zrl">MATHS</td>
    <td class="tg-7zrl">BIO/CS</td>
    <td class="tg-7zrl">CHE</td>
    <td class="tg-nrix" rowspan="8">LUNCH<br/>TIME</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">P/C</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIPCMB</td>
    <td class="tg-7zrl">CHE</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">PHY</td>
    <td class="tg-7zrl">MATHS</td>
    <td class="tg-7zrl">BIO/CS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IHEBA</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">ENG</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIHEBA</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">ENG</td>
  </tr>
  <tr>
    <td class="tg-7zrl">ICEBA</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">CS</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">LAB</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IICEBA</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">BS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IHEPS</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">SOC</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">PS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIHEPS</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">PS</td>
    <td class="tg-7zrl">SOC</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">ENG</td>
  </tr>
</tbody>
</table>
      

<table class="tg">
<thead>
  <tr>
    <th class="tg-8d8j" colspan="7">FRIDAY</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-nrix">CLASS</td>
    <td class="tg-7zrl">9:30 - 10:30</td>
    <td class="tg-7zrl">10:30 - 11:30</td>
    <td class="tg-7zrl">11:30 - 12:30</td>
    <td class="tg-7zrl">12:30 - 1:00</td>
    <td class="tg-7zrl">1:00 - 2:00</td>
    <td class="tg-7zrl">2:00 - 4:00</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IPCMB</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">CHE</td>
    <td class="tg-7zrl">MATHS</td>
    <td class="tg-nrix" rowspan="8">LUNCH<br/>TIME</td>
    <td class="tg-7zrl">BIO/CS</td>
    <td class="tg-7zrl">BIO/CS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIPCMB</td>
    <td class="tg-7zrl">BIO/CS</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">PHY</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">P/C</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IHEBA</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">BS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIHEBA</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">ACC</td>
  </tr>
  <tr>
    <td class="tg-7zrl">ICEBA</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">CS</td>
    <td class="tg-7zrl">ECO</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IICEBA</td>
    <td class="tg-7zrl">CS</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">LAB</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IHEPS</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">SOC</td>
    <td class="tg-7zrl">PS</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">ENG</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIHEPS</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">PS</td>
  </tr>
</tbody>
</table>

<table class="tg">
<thead>
  <tr>
    <th class="tg-8d8j" colspan="7">SATURDAY</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-nrix">CLASS</td>
    <td class="tg-7zrl">9:30 - 10:30</td>
    <td class="tg-7zrl">10:30 - 11:30</td>
    <td class="tg-7zrl">11:30 - 12:30</td>
    <td class="tg-7zrl">12:30 - 1:00</td>
    <td class="tg-7zrl">1:00 - 2:00</td>
    <td class="tg-7zrl">2:00 - 3:00</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IPCMB</td>
    <td class="tg-7zrl">PHY</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-nrix" rowspan="8">LUNCH<br/>TIME</td>
    <td class="tg-7zrl">MATHS</td>
    <td class="tg-7zrl">LAB</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIPCMB</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">BIO/CS</td>
    <td class="tg-7zrl">MATHS</td>
    <td class="tg-7zrl">PHY</td>
    <td class="tg-7zrl">KAN</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IHEBA</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">ECO</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIHEBA</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">BS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">ICEBA</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">BS</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">ACC</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IICEBA</td>
    <td class="tg-7zrl">ACC</td>
    <td class="tg-7zrl">CS</td>
    <td class="tg-7zrl">KAN</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">ENG</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IHEPS</td>
    <td class="tg-7zrl">PS</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">SOC</td>
    <td class="tg-7zrl">KAN</td>
  </tr>
  <tr>
    <td class="tg-7zrl">IIHEPS</td>
    <td class="tg-7zrl">ENG</td>
    <td class="tg-7zrl">ECO</td>
    <td class="tg-7zrl">SOC</td>
    <td class="tg-7zrl">HIS</td>
    <td class="tg-7zrl">PS</td>
  </tr>
</tbody>
</table>

    </div>

    <div className="wrap-container">
  <h1 className="main-heading">The Government High School, Rajanukunte</h1>
        <Link
          to={HighSchoolTimetable}
          download="HighSchoolTimetable"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">Download Pdf</button>
        </Link>
      </div>

    <div className="timetable-section">
    <table class="tg">
<thead>
  <tr>
    <th class="tg-7zrl">DAY</th>
    <th class="tg-7zrl">CLASS</th>
    <th class="tg-7zrl">1</th>
    <th class="tg-7zrl">2</th>
    <th class="tg-7zrl">3</th>
    <th class="tg-7zrl"></th>
    <th class="tg-7zrl">4</th>
    <th class="tg-7zrl">5</th>
    <th class="tg-7zrl"></th>
    <th class="tg-7zrl">6</th>
    <th class="tg-7zrl">7</th>
    <th class="tg-7zrl">8</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl">9:30<br/>TO<br/>10:10</td>
    <td class="tg-7zrl">10:10<br/>TO<br/>10:50</td>
    <td class="tg-7zrl">10:50<br/>TO<br/>11:30</td>
    <td class="tg-7zrl">11:30<br/>TO<br/>11:40</td>
    <td class="tg-7zrl">11:40<br/>TO<br/>12:20</td>
    <td class="tg-7zrl">12:20<br/>TO<br/>1:00</td>
    <td class="tg-7zrl">1:00<br/> TO<br/> 1:30</td>
    <td class="tg-7zrl">1:30<br/>TO<br/> 2:10</td>
    <td class="tg-7zrl">2:10<br/>TO<br/>2:50</td>
    <td class="tg-7zrl">2:50<br/>TO<br/> 3:30</td>
  </tr>
  <tr>
    <td class="tg-nrix" rowspan="4">MONDAY</td>
    <td class="tg-7zrl">9A</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-nrix" rowspan="12">SHORT BREAK</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-nrix" rowspan="12">LUNCH BREAK</td>
    <td class="tg-7zrl">VB</td>
    <td class="tg-7zrl">HS</td>
    <td class="tg-7zrl">HM</td>
  </tr>
  <tr>
    <td class="tg-7zrl">9B</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">HM</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10A</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">VB</td>
    <td class="tg-7zrl">HS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10B</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">LIB</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">VB</td>
  </tr>
  <tr>
    <td class="tg-nrix" rowspan="4">TUESDAY</td>
    <td class="tg-7zrl">9A</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">COMP</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">KMV</td>
  </tr>
  <tr>
    <td class="tg-7zrl">9B</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">HS</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">COMP</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10A</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">HM</td>
    <td class="tg-7zrl">VB</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10B</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">VB</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">HM</td>
    <td class="tg-7zrl">SG</td>
  </tr>
  <tr>
    <td class="tg-nrix" rowspan="4">WEDNES<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DAY</td>
    <td class="tg-7zrl">9A</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">VB</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">SG</td>
  </tr>
  <tr>
    <td class="tg-7zrl">9B</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">VB</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">HS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10A</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">STEM</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">VB</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10B</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">VB</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">SMS</td>
  </tr>
  <tr>
    <td class="tg-nrix" rowspan="4">THURS<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DAY</td>
    <td class="tg-7zrl">9A</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-8d8j" rowspan="4"></td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">HS</td>
    <td class="tg-7zrl">VB</td>
  </tr>
  <tr>
    <td class="tg-7zrl">9B</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">VB</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">HS</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">HS</td>
    <td class="tg-7zrl">SMS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10A</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">COMP</td>
    <td class="tg-7zrl">HS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10B</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">COMP</td>
  </tr>
  <tr>
    <td class="tg-nrix" rowspan="4">FRIDAY</td>
    <td class="tg-7zrl">9A</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-nrix" rowspan="4">SHORT<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BREAK</td>
    <td class="tg-7zrl">HS</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-nrix" rowspan="4">LUNCH<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BREAK</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">CCE</td>
  </tr>
  <tr>
    <td class="tg-7zrl">9B</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">VB</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">CCE</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10A</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">HM</td>
    <td class="tg-7zrl">CCE</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10B</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">STEM</td>
    <td class="tg-7zrl">HM</td>
    <td class="tg-7zrl">CCE</td>
  </tr>
  <tr>
    <td class="tg-nrix" rowspan="5">SATURDAY</td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl">8:10<br/>TO<br/> 8:50</td>
    <td class="tg-7zrl">8:50<br/>TO<br/> 9:30</td>
    <td class="tg-7zrl">9:30<br/>TO<br/> 10:10</td>
    <td class="tg-7zrl">10:10<br/> TO<br/> 10:50</td>
    <td class="tg-7zrl">10:50<br/> TO<br/> 11:30</td>
    <td class="tg-7zrl">11:30<br/>TO<br/>12:00</td>
    <td class="tg-8d8j" colspan="4" rowspan="6"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">9A</td>
    <td class="tg-nrix" rowspan="4">YOGA</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">HS</td>
    <td class="tg-nrix" rowspan="4">TIFFIN<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BREAK</td>
  </tr>
  <tr>
    <td class="tg-7zrl">9B</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SMB</td>
    <td class="tg-7zrl">KMV</td>
    <td class="tg-7zrl">VB</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10A</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">SMS</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10B</td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">SG</td>
  </tr>
  <tr>
    <td class="tg-nrix"></td>
    <td class="tg-7zrl">10B</td>
    <td class="tg-nrix"></td>
    <td class="tg-7zrl">SMS</td>
    <td class="tg-7zrl">GS</td>
    <td class="tg-7zrl">UMD</td>
    <td class="tg-7zrl">SG</td>
    <td class="tg-nrix"></td>
  </tr>
</tbody>
</table>

</div>


<div className="wrap-container">
<h1 className="main-heading">The Government Primary School, Rajanukunte</h1>
        <Link
          to={PrimaryTimetable}
          download="PrimaryTimetable"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">Download Pdf</button>
        </Link>
      </div>
<div className="timetable-section">
  
  <img src={primary} alt="timetable" />
</div>
    </>
  )
}

export default Timetable