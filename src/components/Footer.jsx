function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center bg-[#101110] align-middle">
      <div className="w-full max-w-7xl py-4">
        <p className="block text-center xl:flex xl:justify-center xl:align-middle">
          <span className="block text-white">
            © Copyright 2023 - {currentYear}
            <span className="hidden xl:inline">&nbsp;|&nbsp;</span>
          </span>
          <span className="block text-white">
            All rights reserved
            <span className="hidden xl:inline">&nbsp;|&nbsp;</span>
          </span>
          <span className="block text-white">This website was made</span>
          <span className="block text-white">
            <span className="hidden xl:inline">&nbsp;</span>
            by Laurentiu Cozma
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
