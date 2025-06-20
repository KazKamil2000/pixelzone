export default function Footer() { 
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} PixelZone. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a> and{' '}
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
    );
  }