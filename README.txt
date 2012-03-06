ProcessWire DataTable 0.5.0
============================

This module enables you to find and edit (fancybox modal iframe) pages at a small and very large scale. 
So far it has:

- ajax suuport
- masked pagination
- state saving (datatable using cookie, template filter using session)
- template filter (only showing templates user has edit access)
- search text filter (using title|body field)
- multilanguage support (PW's language translator)

Superuser will see all pages and system templates. Users only those with view|edit access and pages in trash.

This Module is still very simple and only in "lazy" developement and testing and this is the first official release mainly to get it out for others to see and use. It also could provide as an example/kickstart for someone. Everyone is encouraged to help and contribute to further improve or add features. The module is hosted on my github: 

The plugin used in this module is the exellect jQuery Plugin DataTable 1.8.2 - http://datatables.net/
I've chosen it, because I used in in some other web projects and was really happy about it's power and ease to setup. It supports jQuery UI styling, which makes the deal perfect for a ProcessWire module.

- Author: Philipp "Soma" Urlich, philipp at urlich dot ch
- Date created: 27/10/2011
- Last modified: 06/02/2012



How to install:
=============================

- Download the contents of this repository and put the folder renamed as "PageEditSoftLock" into your site/modules/ folder
- Login to processwire and got to Modules page and click "Check for new modules". You should see a note that two new modules were found. Install the "Page Edit Soft Lock" module only, the Process Page Edit Soft Lock module gets installed and uninstalled automatic.
- A new admin page "DataTable" should appear
- Done