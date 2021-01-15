package br.gov.rj.petropolis.turispetro.services.exceptions;

public class ResourceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException (String msg) {
        super(msg);
    }

}
