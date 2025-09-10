function Footer() {
  return (
    <footer className="bg-primary py-4 text-center text-sm">
      <p>© {new Date().getFullYear()} Marzanoo. All rights reserved.</p>
      <a
        href="https://github.com/marzanoo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        GitHub Profile
      </a>
    </footer>
  );
}

export default Footer;
