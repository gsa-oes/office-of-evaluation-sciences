# The Office of Evaluation Sciences Website

This is the website of the Office of Evaluation Sciences. It showcases and explains our work.

# Details about the Site

This is a static [Jekyll](https://jekyllrb.com/) site, hosted on the
[Federalist](https://federalist.18f.gov/) platform. It uses the [`uswds-jekyll`](https://github.com/18F/uswds-jekyll/)
theme to build on US Web Design System templates.

## Structure

- \_data: `uswds-jekyll` configurations for site components
- \_includes: individual site components (headers, footers, and other bits of HTML) used by layouts
- \_layouts: HTML files setting the site structure, which page content is dropped into
- \_projects: Markdown files for each OES project
- \_sass: stylesheets, which determine how the site looks; these are compiled together by Jekyll into `main.css` on the live site
- \_site: the site, as built by Jekyll. Do not edit anything in this folder!
- \_team: Markdown files for each OES team member
- assets: CSS, JS, and images
- pages: contains all of the site pages besides project and team member pages
- \_config.yml: the file setting the overall Jekyll configuration

## Installation for local development

Development of this site requires the following tools on your machine:
- [`git`](https://git-scm.com/) for version control
- [`ruby`](https://www.ruby-lang.org/en/) as the behind-the-scenes programming language
- `gem`, the package manager comes built-in with `ruby`
- [`bundler`](https://bundler.io/gemfile.html) to manage gems
- `jekyll`, installed as a gem via bundler

If you do not have one already, a tool to manage `ruby` versions will also be helpful.
[`rbenv`](https://github.com/rbenv/rbenv) is a decent way to go. This will use the
[`.ruby-version`](/.ruby-version) file to know which version to install, keeping you
in line with other developers.

With those tools installed, head to your command line and run:
```
git clone https://github.com/gsa-oes/office-of-evaluation-sciences.git
cd office-of-evaluation-sciences
bundle install
bundle exec jekyll serve
```

If everything worked, you'll be able to see the site locally at http://127.0.0.1:4000.

## 18F Open Source Policy

This repository contains the official [Open Source Policy](policy.md) of [18F](https://18f.gsa.gov/) (a digital delivery team within the [General Services Administration](http://gsa.gov)).

**[Read 18F's Open Source Policy.](policy.md)**

### 18F Team Guidance

For 18F team members, we have guidance on how 18F puts this policy into practice, and how we handle the narrow situations where we may delay or withhold the release of source code.

**[18F's open source team practices.](practice.md)**

### Credits

This policy was originally forked from the [Consumer Financial Protection Bureau's policy](https://github.com/cfpb/source-code-policy). Thanks also to [@benbalter](https://github.com/benbalter) for his [insights regarding CFPB's initial policy](http://ben.balter.com/2012/04/10/whats-missing-from-cfpbs-awesome-new-source-code-policy/).

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
