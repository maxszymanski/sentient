import Footer from '../_footer/Footer'
import LargeEllipse from '../_ui/LargeEllipse'
import SectionsLinearBg from '../_ui/SectionsLinearBg'
import ComparisonSection from './ComparisonSection'
import ConnectingSection from './ConnectingSection'
import FaqSection from './FaqSection'
import FormSection from './FormSection'
import InteligenceSection from './InteligenceSection'
import ScrolledSections from './ScrolledSections'
import SecuritySection from './SecuritySection'

function ScrolledSectionsContent() {
    return (
        <ScrolledSections>
            <InteligenceSection />
            <div className="relative w-full overflow-hidden">
                <LargeEllipse />
                <SecuritySection />
                <ConnectingSection />
                <ComparisonSection />
                <FaqSection />
                <FormSection />
                <SectionsLinearBg />
            </div>
            <Footer />
        </ScrolledSections>
    )
}

export default ScrolledSectionsContent
