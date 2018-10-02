import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import cockpit from 'cockpit';

const _ = cockpit.gettext;

const ContainerRemoveErrorModal = (props) => {
    const name = props.containerWillDelete ? _(props.containerWillDelete.Name) : _("");
    return (
        <div>
            <Modal isOpen={props.setContainerRemoveErrorModal} fade={false} >
                <ModalHeader>
                    {cockpit.format(_("Please confirm forced deletion of $0"), name)}
                </ModalHeader>
                <ModalBody>
                    {_("Container is currently running.")}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.handleCancelRemoveError}>{_("Cancel")}</Button>
                    <Button color="danger" className="btn-ctr-focedelete" onClick={props.handleForceRemoveContainer}>{_("Force Delete")}</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ContainerRemoveErrorModal;
