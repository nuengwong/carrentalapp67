export default function ManageReservationLayout({
  children,
  dashboard,
  manage,
}: {
  children: React.ReactNode;
  dashboard: React.ReactNode;
  manage: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-full">
      {children}
      {dashboard}
      {manage}
    </main>
  );
}
