FROM docker-registry.phenomenal-h2020.eu/phnmnl/galaxy-k8s-runtime
MAINTAINER PhenoMeNal-H2020 Project <phenomenal-h2020-users@googlegroups.com>
LABEL Description="Galaxy test for running inside Kubernetes."

# Galaxy is currently on /galaxy, and that is the current work directory

COPY templates/base.mako templates/base.mako
COPY templates/js-app.mako templates/js-app.mako
COPY templates/base/base_panels.mako templates/base/base_panels.mako
COPY templates/webapps/tool_shed/repository/tool_form.mako templates/webapps/tool_shed/repository/tool_form.mako
COPY templates/webapps/galaxy/galaxy.panels.mako templates/webapps/galaxy/galaxy.panels.mako
COPY templates/webapps/galaxy/dataset/errors.mako templates/webapps/galaxy/dataset/errors.mako
COPY templates/webapps/galaxy/mobile/form.mako templates/webapps/galaxy/mobile/form.mako
COPY templates/webapps/galaxy/mobile/index.mako templates/webapps/galaxy/mobile/index.mako
COPY templates/webapps/galaxy/root/tool_runner.mako templates/webapps/galaxy/root/tool_runner.mako
COPY templates/webapps/galaxy/page/wymiframe.mako templates/webapps/galaxy/page/wymiframe.mako

# this would copy myfile.txt which is standing next to the Dockerfile to /galaxy/file.txt on the container
