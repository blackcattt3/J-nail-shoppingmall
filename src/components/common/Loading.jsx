export default function Loading({ message = "로딩 중..." }) {
  return (
    <div style={{ padding: "24px", textAlign: "center" }}>
      {message}
    </div>
  );
}