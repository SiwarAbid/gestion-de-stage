
import { AdminPanelSettings } from "@mui/icons-material";
import "./feed.css";


export default function Feed() {
 
  
  return (
      <div className="feed">
              <div class="container">
                 
                  <section class="table__body">
                  <h2 className="title2">liste de stagiaire </h2>
                      <table>
                          <thead>
                              <tr>
                                  <th> Id </th>
                                  <th> Customer </th>
                                  <th> Location </th>
                                  <th> Order Date </th>
                                  <th> Status </th>
                                  <th> Amount </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td> 1 </td>
                                  <td> <img src="" alt="" />Zinzu Chan Lee</td>
                                  <td> Seoul </td>
                                  <td> 17 Dec, 2022 </td>
                                  <td>
                                      <p class="status delivered">Delivered</p>
                                  </td>
                                  <td> <strong> $128.90 </strong></td>
                              </tr>
                              <tr>
                                  <td> 2 </td>
                                  <td><img src="" alt="" /> Jeet Saru </td>
                                  <td> Kathmandu </td>
                                  <td> 27 Aug, 2023 </td>
                                  <td>
                                      <p class="status cancelled">Cancelled</p>
                                  </td>
                                  <td> <strong>$5350.50</strong> </td>
                              </tr>
                              <tr>
                                  <td> 3</td>
                                  <td><img src="" alt="" /> Sonal Gharti </td>
                                  <td> Tokyo </td>
                                  <td> 14 Mar, 2023 </td>
                                  <td>
                                      <p class="status shipped">Shipped</p>
                                  </td>
                                  <td> <strong>$210.40</strong> </td>
                              </tr>
                              <tr>
                                  <td> 4</td>
                                  <td><img src="" alt="" /> Alson GC </td>
                                  <td> New Delhi </td>
                                  <td> 25 May, 2023 </td>
                                  <td>
                                      <p class="status delivered">Delivered</p>
                                  </td>
                                  <td> <strong>$149.70</strong> </td>
                              </tr>


                          </tbody>
                      </table>
                  </section>

              </div>

      </div>

  );
}

