export const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen flex flex-col md:justify-center md:items-center'>
      {children}
    </div>
  );
};
