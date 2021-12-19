export default {
  head () {
    const basicTitle = 'Keep-Learning.Tokyo';
    const title = this.meta.title ? this.meta.title : '';
    const titleTemplate = title ? `${title} | ${basicTitle}` : basicTitle;
    const rootUrl = 'https://keep-learning.tokyo';
    const description = this.meta.description ? this.meta.description : 'VueやJavascript、AWSの技術メモを発信しているブログです。';
    const imgUrl = this.meta.imgUrl ? `https:${this.meta.imgUrl}` : rootUrl + '/img/logo.png';
    const currentUrl = rootUrl + this.$route.path;
    return {
      // titleTemplate: str => (str ? `${str} | ${basicTitle}` : basicTitle),
      title: titleTemplate,
      meta: [
        { name: 'description', content: description },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:title', content: titleTemplate },
        { property: 'twitter:site', content: '@anonymus' },
        { property: 'twitter:creator', content: '@anonymus' },
        { property: 'twitter:description', content: description },
        {
          property: 'twitter:image',
          content: imgUrl,
        },
        { property: 'og:title', content: titleTemplate },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: currentUrl },
        {
          property: 'og:image',
          content: imgUrl,
        },
      ],
    };
  },
};
