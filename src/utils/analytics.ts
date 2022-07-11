import { useEffect, useState } from 'preact/hooks';

const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<{ [key: string]: any } | null>();
  useEffect(() => {
    const importLibs = async () => {
      const { default: AnalyticsObject } = await import('analytics');
      const { default: googleAnalytics } = await import('@analytics/google-analytics');
      if (AnalyticsObject && googleAnalytics) {
        const analyticsConfig = AnalyticsObject({
          plugins: [
            googleAnalytics({
              trackingId: 'UA-232667526-1'
            })
          ]
        });
        setAnalytics(analyticsConfig);
      }
    };
    importLibs();
  }, []);
  return analytics;
};

export default useAnalytics;
