---
layout: '@/templates/BasePost.astro'
title: Python Observe Script
description: Automating a manual build process.
pubDate: 2023-12-28T01:34:45.000Z
imgSrc: '/assets/images/python.jpeg'
imgAlt: 'python'
---

## Problem to Solve
At my job, our front end is built with older technology using Coffeescript and Knockout.
While we have a pretty solid developer experience with this technology, some of our front 
end needs to be built with Grunt, which is a very manual process.  Even though the process 
takes less than a second and it can be run with a simple command, the time still adds up 
when you are needing to save and view the changes every minute or two. With other aspects 
of our front end, we can see the updates automatically running a node scipt `npm run serve` 
but we didn't have that option with this part of the codebase.  

## Solution

My solution was to write a python script that will observe a folder for any changes
and when it detects a change it will run the command that builds the front end.  The 
end result is that when I make a save, the front end is rebuilt in about a 
second, without me needing to navigate to a terminal and run the command myself.
The solution makes use of the library Watchdog.  To make use of this for other 
use cases, you can make adjustments to the watch folder and the command to be run. 
I left some commented out code that adds options for other types of events, as well.

```python

path_to_observe = '../kipsu/assets/src/widgets/coffee/guest/'
build_command = 'cd ../kipsu/assets/ && npm run build:widgets'

from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import os
import time

class MyHandler(FileSystemEventHandler):
    # def on_any_event(self, event):
    #     print(event.event_type, event.src_path)
    #
    # def on_created(self, event):
    #     print("on_created", event.src_path)
    #
    # def on_deleted(self, event):
    #     print("on_deleted", event.src_path)
    def on_modified(self, event):
        on_modified_event()

    # def on_moved(self, event):
    #     print("on_moved", event.src_path)

last_trigger = 0

def on_modified_event():
    global last_trigger
    if (time.time() - last_trigger > 5):
        last_trigger = time.time()
        os.system(build_command)
        print('Build complete, observing for changes')

event_handler = MyHandler()
observer = Observer()
observer.schedule(event_handler, path=path_to_observe, recursive=False)
observer.start()
print("observing for changes")

loop = True
while loop:
    user_input = input("")
    if user_input == "exit" or "quit" or "stop" or "q" or "e":
        observer.stop()
        loop = False
```
