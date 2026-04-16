const Test = () => {
  return (
    <table>
      <tr>
        <th>Year</th>
        <th>Jan - June</th>
        <th>Jul - Dec</th>
      </tr>
      <tr>
        <td>2014</td>
        <td rowSpan={5} colSpan={2} className="border border-black text-center">
          Uni
        </td>
        <td></td>
      </tr>
      <tr>
        <td>2015</td>
      </tr>
      <tr>
        <td>2016</td>
      </tr>
      <tr>
        <td>2017</td>
      </tr>
      <tr>
        <td>2018</td>
      </tr>
      <tr>
        <td>2019</td>
        <td className="border border-black text-center">
          Trainee Software Dev
        </td>
        <td className="border border-black text-center">
          Junior Software dev in test
        </td>
      </tr>
      <tr>
        <td>2020</td>
        <td colSpan={2} className="border border-black text-center">
          Software Developer
        </td>
        <td></td>
      </tr>
      <tr>
        <td>2021</td>
        <td colSpan={2} className="border-r border-l border-black text-center">
          Full stack software dev
        </td>
        <td></td>
      </tr>
      <tr>
        <td>2022</td>
        <td className="border-l border-black text-center"></td>
        <td className="border border-black text-center">Gap year</td>
      </tr>
      <tr>
        <td>2023</td>
        <td className="border border-black text-center">Gap year</td>
        <td className="border-r border-black text-center"></td>
      </tr>
      <tr>
        <td>2024</td>
        <td
          colSpan={2}
          rowSpan={2}
          className="border-b border-r border-l border-black text-center"
        >
          Software Developer
        </td>
        <td></td>
      </tr>
      <tr>
        <td>2025</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2026</td>
        <td></td>
        <td></td>
      </tr>
    </table>
  );
};

export default Test;
