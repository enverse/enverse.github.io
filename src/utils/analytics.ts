import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';

const analytics = Analytics({
  plugins: [
    googleAnalytics({
      trackingId: 'AW-10892606530'
    })
  ]
});

export default analytics;
