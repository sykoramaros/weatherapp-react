import React from "react"

const Footer = () => {
  return (
    <div className="pt-5">
      <footer className="bg-success text-white text-center py-3">
        <div className="ontainer">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <p>
            <a href="#" className="text-white">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="text-white">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
