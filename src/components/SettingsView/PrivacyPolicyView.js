import React, { Component } from "react"
import { Text, View } from "react-native"
import HTMLView from "/lib/helpers/HTMLView"
import styles from "./styles"

export default class PrivacyPolicyView extends Component {
  render() {
    return (
      <View style={styles.privacyContainer}>
        <Text style={styles.privacyParagraph}>
          <Text>Perceivant is committed to protecting your privacy. This privacy policy (&quot;Privacy Policy&quot;) describes our practices regarding the personal information that may be collected from users of our website, including </Text>
          <HTMLView value={`<a href="https://www.perceivant.com" target="_blank">www.perceivant.com</a>`} />
          <Text>, </Text>
          <HTMLView value={`<a href="http://www.mybearface.com" target="_blank">www.mybearface.com</a>`} />
          <Text>, and any other sites that link to this Privacy Policy (collectively the &quot;Site&quot;), Perceivant&apos;s Bearface learning management software (&quot;Bearface&quot;), Perceivant&apos;s BearTracks iOS and Android Applications (&quot;Apps&quot;), and other related educational services (&quot;Services&quot;) (Site, Bearface, Apps, and Services collectively referred to as the &quot;Platform&quot;).&nbsp; By submitting personal information through our Platform, you expressly consent to the processing of your personal information in the U.S. in accordance with this Privacy Policy.&nbsp; The use of personal information collected through our Platform shall be limited to the purposes described in this Privacy Policy.</Text>
        </Text>
        <Text style={styles.privacyParagraph}>
          <Text style={styles.underline}>Who we are.</Text>
          <Text> When we refer to &quot;</Text>
          <Text style={styles.underline}>us</Text>
          <Text>&quot;, &quot;</Text>
          <Text style={styles.underline}>we</Text>
          <Text>&quot;, &quot;</Text>
          <Text style={styles.underline}>our</Text>
          <Text>&quot;, or &quot;</Text>
          <Text style={styles.underline}>Perceivant</Text>
          <Text>&quot; in this Privacy Policy, we mean Perceivant, LLC and its affiliates.</Text>
        </Text>
        <Text style={styles.privacyParagraph}>
          <Text style={styles.underline}>This Privacy Policy governs our Platform that we provide directly to you.</Text>
          <Text> Whether you are browsing our websites, receive our newsletters, or using a trial version of our products, this Privacy Policy governs the use of personal information for all our products and services that we provide directly to you.</Text>
        </Text>
        <Text style={styles.privacyParagraph}>
          <Text style={styles.underline}>Changes to this Privacy Policy.</Text>
          <Text> From time to time we will need to update this Privacy Policy to reflect changes to our products and services, the way we operate, or to meet new legal and regulatory requirements. You will find the latest version of this Privacy Policy at </Text>
          <HTMLView value={`<a href="https://www.perceivant.com/legal" target="_blank">www.perceivant.com/legal</a>`} />
          <Text>.</Text>
        </Text>
        <Text style={styles.privacyParagraph}>
          <Text style={styles.underline}>Data you provide to us.</Text>
          <Text> We collect information from you, such as first and last name, gender, e-mail and mailing addresses, password, personal health information including genetic testing and family history protected under Health Insurance Portability and Accountability Act (HIPAA) and the Genetic Information Nondiscrimination Act (GINA), and user contributions like your responses to quizzes, assignments and other course work, and files you submit or upload as well as your activity and actions within our products and services. In some products you also can provide comments in discussion forums and chats and can send messages to your peers and instructors. If you are an instructor, we also collect information about your grading, feedback and assessments, and similar actions within our products. We also may retain information on your behalf, such as files and messages that you store using your account. If you provide us feedback or contact us via e-mail, we will collect your name and e-mail address, as well as any other content included in the e-mail. When you participate in one of our surveys, we may collect additional profile information. We also collect other types of personal information and demographic information that you provide to us voluntarily.</Text>
        </Text>
        <Text style={styles.privacyParagraph}>
          <Text style={styles.underline}>Data collected automatically via technology.</Text>
          <Text> To make our Platform more useful to you, our HIPAA compliant servers by Amazon Web Services, Inc. collect information from you, including browser type, operating system, Internet Protocol (IP) address, domain name, and/or a date/time stamp for your visit. We also use cookies and web beacons (as described below) and navigational data like Uniform Resource Locators (URL) to gather information regarding the date and time of your visit and the solutions and information for which you searched and which you viewed. Like most Internet services, we automatically gather this data and store it in log files each time you visit our Site, use our Apps, or access your account. We may link this automatically-collected data to personally identifiable information. &quot;Cookies&quot; are small pieces of information that a website sends to your computer&apos;s hard drive while you are viewing a website. We may use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your computer until you delete them) to provide you with a more personal and interactive experience on our Site. &quot;Web Beacons&quot;are digital images we use to log information on our Site and in our emails. We use web beacons to manage cookies, count visits, and to learn what marketing works and what does not. We also use web beacons to tell if you open or act on our emails. &quot;Flash Cookies&quot;are used to store your preferences such as volume control or to display content based upon what you view on our Site to personalize your visit. We do not control the privacy practices of the third parties who place or track Flash Cookies and this Privacy Policy does not cover their practices. You should visit the privacy policies of companies who place Flash Cookies to understand their practices. Most web browsers are set to accept cookies by default. If you prefer, you can typically remove and reject cookies from our Site with your browser settings. If you remove or reject our cookies, it may affect how our Platform works for you.</Text>
        </Text>
        <Text style={styles.privacyParagraph}>
          <Text style={styles.underline}>How We Use This Information.</Text>
          <Text> In general, personal information you submit to us is used either to respond to requests that you make, or to aid us in serving you better. Perceivant uses your personal information to create and maintain your account; to identify you as a user in our system; to operate, maintain, and improve our Platform; to personalize and improve your experience; to send you administrative e-mail; to respond to your comments or inquiries; and to protect, investigate, and deter against fraudulent, unauthorized, or illegal activity. We also use your personal information for:</Text>
        </Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.listBullet}>•</Text>
            <Text style={styles.listItemText}>
              <Text style={styles.underline}>Platform Features and Functionality.</Text>
              <Text> We use your information to operate, maintain, and provide to you the features and functionality of our Platform, as well as to communicate directly with you (for example, to send you email messages and push notifications) to allow you to communicate with others in the Platform. Typically, it will be necessary for us to use your information in this way in order to provide you with the service you request or because it is in our legitimate interests to ensure our products and services are being offered in a manner that meets our high standards.</Text>
            </Text>
          </View>
        </View>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.listBullet}>•</Text>
            <Text style={styles.listItemText}>
              <Text style={styles.underline}>Research.</Text>
              <Text> Research institutions and instructors utilize the information you provide us for educational, research purposes.&nbsp; Although you provide sensitive information included under HIPAA and GINA, rest assured that your personal information is deidentified prior to dissemination and is not linked to you. When used for these purposes, we will implement appropriate safeguards.&nbsp; This may include removing or hashing direct identifiers (e.g., your personal health information) from the data set before sending information to research institutions and instructors.</Text>
            </Text>
          </View>
        </View>
        <Text style={styles.privacyParagraph}>
          <Text style={styles.underline}>Disclosure of Your Personal Information.</Text>
          <Text> We will share your personal information with third parties only in the ways that are described in this Privacy Policy or with your consent.</Text>
        </Text>
        <Text style={styles.privacyParagraph}>
          <Text style={styles.underline}>Third Party Service Providers.</Text>
          <Text> We may share your personal information with third party service providers for the sole purpose of providing you with the Services that we offer you through our Platform. For example, Amazon Web Services helps us host our products and services. For more information about Amazon Web Services&apos; privacy policy, please see the following link: </Text>
          <HTMLView value={`<a href="https://aws.amazon.com/privacy/" target="_blank">https://aws.amazon.com/privacy/</a>`} />
          <Text>.</Text>
        </Text>
        <Text style={styles.privacyParagraph}>
          <Text style={styles.underline}>Other Disclosures</Text>
          <Text> Perceivant may disclose information about you if it believes such disclosure is necessary to (a) comply with laws or to respond to lawful requests and legal process; or (b) protect or defend the rights, safety, or property of Perceivant, users of the Platform, or any person including to enforce our agreements, policies, and terms of use or (c) in an emergency to protect the personal safety of any person.&nbsp; We may also share information about you in connection with or during negotiation of any merger, financing, acquisition, bankruptcy, dissolution, transaction or proceeding involving sale, transfer, divestiture or disclosure of all or a portion of our business or assets to another company. In the event that information is shared in this manner, notice will be posted on our Site.Third Party Service Providers.</Text>
        </Text>
        <Text style={styles.privacyParagraph}>
          <Text style={styles.underline}>Notice to California Residents - Your California Privacy Rights (As Provided By California Civil Code Section 1798.83).</Text>
          <Text> California&apos;s &quot;Shine the Light&quot; law, Civil Code section 1798.83, requires certain businesses that share customer personal information with third parties for the third parties&apos; direct marketing purposes to respond to requests from California customers asking about the businesses&apos; practices related to such information-sharing. Alternately, such businesses may have in place a policy not to disclose a customer&apos;s personal information to third parties for the third parties&apos; direct marketing purposes if the customer has exercised an option to opt-out of such information-sharing. Perceivant does not share personal identifiable information with third parties for third parties&apos; direct marking purposes. However, as described in our Privacy Policy, you can opt-out by emailing us at </Text>
          <HTMLView value={`<a href="mailto:help@perceivant.com">help@perceivant.com</a>`} />
          <Text>. Please note that under California law businesses are only required to respond to a customer making such a request once during any calendar year.</Text>
        </Text>
        <Text style={styles.privacyParagraph}>
          <Text style={styles.underline}>Changes to Personal Information.</Text>
          <Text> You may change some of your personal information in your account by editing your profile within the Platform. You may also request changes or deletions by e-mailing us at the e-mail address set forth below. We will respond to your request, when permitted by law, within 30 days. We may be unable to delete information that resides in our archives.</Text>
        </Text>
        <Text style={styles.privacyParagraph}>
          <Text style={styles.underline}>Security of Your Personal Information.</Text>
          <Text>Perceivant takes reasonable steps to help protect your personal information in an effort to prevent unauthorized access, use, or disclosure. Despite these measures, you should know that Perceivant cannot fully eliminate security risks associated with personal information. No method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee its absolute security. Any content you post while using the Platform is at your own risk. If you have any questions about security on our Platform, you can contact us at the contact information set forth below.</Text>
        </Text>
        <Text style={styles.privacyParagraph}>
          <Text style={styles.underline}>Contact Information.</Text>
          <Text> Perceivant welcomes your comments or questions regarding this Privacy Policy. Please e-mail us at </Text>
          <HTMLView value={`<a href="mailto:help@perceivant.com">help@perceivant.com</a>`} />
          <Text> or contact us at the following address:</Text>
        </Text>
        <Text>Perceivant, LLC</Text>
        <Text>5719 Lawton Loop E Drive, Ste 202&nbsp;</Text>
        <Text>Indianapolis, Indiana, 46216 USA&nbsp;</Text>
      </View>
    )
  }
}
