import "../App.css";

export default function ReportManagement() {
  const reports = [
    { id: 1, description: "Lost dog near the park", location: "Tel Aviv", status: "Resolved" },
    { id: 2, description: "Stray puppy spotted", location: "Jerusalem", status: "Pending" },
    { id: 3, description: "Injured dog needs help", location: "Haifa", status: "In Progress" },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Resolved":
        return "status resolved";
      case "In Progress":
        return "status in-progress";
      case "Pending":
        return "status pending";
      default:
        return "";
    }
  };

  return (
    <div className="page-container">
      <h2>Report Management</h2>
      <table className="report-table">
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Description</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.description}</td>
              <td>{report.location}</td>
              <td className={getStatusClass(report.status)}>{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
