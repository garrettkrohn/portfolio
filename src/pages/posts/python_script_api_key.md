---
layout: '@/templates/BasePost.astro'
title: Python Script API Key
description: How to put api keys into an enironment variable.
pubDate: 2024-01-16T02:34:45.000Z
imgSrc: '/assets/images/secretkey.jpg'
imgAlt: 'Secret Key'
---

# API Keys
One of the easiest security sins to commit is to accidentally put 
an api key into source control.  Instead of putting an api key into
a `config.py` file which can go to source control, you can put an
api key into your shell environment variables, and pull it into your 
script.

## zsh file

I use zsh as my shell, so in my .zshrc fill I will add the following line:
```bash
export API_KEY=abcd1234
```

Then from within the script, use the following:
```python
global api_key 
api_key = os.environ['SCHEDULE_MESSAGE_API_KEY']
if api_key == '':
    sys.exit('no api key found, please add an environment variable named API_KEY')
```

Now the api key is safely stored in your local environment and 
kept out of source control.  Easy as that!
