import React from 'react';

const Doctors = () => {
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Specilist</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className='hover:bg-gray-300'>
        <th>1</th>
        <td>Prof. Dr. col Mohammad Delwar Hossain</td>
        <td>ENT Specilist</td>
      </tr>
      {/* row 2 */}
      <tr className="hover:bg-gray-300">
        <th>2</th>
        <td>Dr. Moniruzzaman Buiya</td>
        <td>Eurologist</td>
      </tr>
      {/* row 3 */}
      <tr className='hover:bg-gray-300'>
        <th>3</th>
        <td>Dr. Saiduzzman</td>
        <td>Neurologist</td>
      </tr>
      <tr className='hover:bg-gray-300'>
        <th>4</th>
        <td>Dr. Tanzina Tasnim</td>
        <td>Gynecologist</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Doctors;