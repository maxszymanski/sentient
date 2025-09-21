import FullPage from './FullPage'
import Header from './Header'
import AnimatedSection from './AnimatedSection'
import ScrolledSectionsContent from './ScrolledSectionsContent'
import MeetSentientSection from './MeetSentientSection'

function FullPageContainer() {
    const fullpageOptions = {
        scrollingSpeed: 700,
        controlArrows: false,
        slidesNavigation: false,
        normalScrollElements: '.normal-scroll-section',
        scrollOverflow: false,
    }

    return (
        <FullPage {...fullpageOptions}>
            <Header />
            <AnimatedSection />
            <MeetSentientSection />
            <ScrolledSectionsContent />
        </FullPage>
    )
}

export default FullPageContainer
