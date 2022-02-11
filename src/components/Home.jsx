import React from 'react'

export default function Home() {
  return (
    <div className="container mt-5 py-5">
        <h2 style={{textAlign: 'center'}}>Listado de Reserva</h2>
       <table class="table">
            <thead>
                <tr className="bg-info">
                    <th>ID</th>
                    <th>NAME</th>
                    <th>IDENTIFICACION</th>
                    <th>LOCATION</th>
                    <th>VALUE</th>
                    <th>STOCK</th>
                    <th>DESCRIPTION</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>Otto</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>Otto</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>Otto</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
