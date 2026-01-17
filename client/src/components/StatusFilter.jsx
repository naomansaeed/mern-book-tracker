function StatusFilter({ value, onChange }) {
  return (
    <label>
      Filter by status:{" "}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="all">All</option>
        <option value="planned">Planned</option>
        <option value="reading">Reading</option>
        <option value="finished">Finished</option>
      </select>
    </label>
  );
}

export default StatusFilter;
