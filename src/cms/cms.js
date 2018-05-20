import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import TeamPagePreview from './preview-templates/TeamPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('team', TeamPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
