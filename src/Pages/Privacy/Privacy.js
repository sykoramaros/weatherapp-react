import React from "react"

const Privacy = () => {
  return (
    <div className="mt-1">
      <nav class="navbar navbar-success bg-success-subtle">
        <div class="container p-1">
          <h4 class="m-auto">
            WeatherApp
          </h4>
        </div>
      </nav>

      <div class="container mt-4 mb-5">
        <h1 class="text-center mb-4">Privacy Policy</h1>
        <p>
          This Privacy Policy describes how <strong>WeatherApp</strong> (the
          "Service") handles user data and protects your privacy.
        </p>

        <h3 class="mt-4">1. Information We Collect</h3>
        <p>
          WeatherApp does not collect personally identifiable information unless
          explicitly provided by you.
        </p>
        <ul>
          <li>
            Location data (only when you provide location input for weather
            services).
          </li>
          <li>
            Usage data, such as app performance, pages visited, and interaction
            behavior.
          </li>
        </ul>

        <h3 class="mt-4">2. How We Use Information</h3>
        <p>We use the collected information for the following purposes:</p>
        <ul>
          <li>To provide accurate weather data based on your location.</li>
          <li>To improve user experience and enhance app performance.</li>
          <li>To monitor and analyze usage trends.</li>
        </ul>

        <h3 class="mt-4">3. Third-Party Services</h3>
        <p>
          We may use third-party services like weather APIs (e.g.,
          OpenWeatherMap) to deliver accurate data. These services may have
          their own privacy policies.
        </p>

        <h3 class="mt-4">4. Data Security</h3>
        <p>
          We take precautions to protect your information. However, no method of
          transmission over the Internet is 100% secure.
        </p>

        <h3 class="mt-4">5. Changes to This Policy</h3>
        <p>
          We reserve the right to update this Privacy Policy. We encourage you
          to review this policy periodically.
        </p>

        <h3 class="mt-4">6. Contact Us</h3>
        <p>
          If you have questions or concerns regarding this Privacy Policy, you
          can contact us at:
        </p>
        <address>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@weatherapp.com">support@weatherapp.com</a>
          <br />
          <strong>Phone:</strong> +123-456-7890
        </address>

        <hr class="my-5" />
        <p class="text-center text-muted">
          © 2024 WeatherApp. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Privacy
